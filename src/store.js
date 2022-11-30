import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = text => ({ type: ADD_TODO, text });
const deleteTodo = id => ({ type: DELETE_TODO, id });

JSON.parse(localStorage.getItem("todos")) || localStorage.setItem("todos", JSON.stringify([]));

const reducer = (state = JSON.parse(localStorage.getItem("todos")), action) => {
	switch (action.type) {
		case ADD_TODO:
			const addItem = [{ text: action.text, id: Date.now() }, ...state];
			localStorage.setItem("todos", JSON.stringify(addItem));
			return addItem;
		case DELETE_TODO:
			const delItem = state.filter(todo => todo.id !== action.id);
			localStorage.setItem("todos", JSON.stringify(delItem));
			return delItem;
		default:
			return state;
	}
};

const store = createStore(reducer);

export const actionCreators = {
	addTodo,
	deleteTodo,
};

export default store;
