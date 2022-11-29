import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = text => ({ type: ADD_TODO, text });
const deleteTodo = id => ({ type: DELETE_TODO, id });

const reducer = (state = ["hello"], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.id);
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