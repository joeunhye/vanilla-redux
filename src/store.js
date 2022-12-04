import { createStore } from "redux";
import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

//VERSION1 : reducer
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addTodo = text => ({ type: ADD_TODO, text });
// const deleteTodo = id => ({ type: DELETE_TODO, id });

// const reducer = (state = JSON.parse(localStorage.getItem("todos")), action) => {
// 	switch (action.type) {
// 		case addTodo.type:
// 			console.log(action);
// 			const addItem = [{ text: action.payload, id: Date.now() }, ...state];
// 			localStorage.setItem("todos", JSON.stringify(addItem));
// 			return addItem;
// 		case deleteTodo.type:
// 			const delItem = state.filter(todo => todo.id !== action.payload);
// 			localStorage.setItem("todos", JSON.stringify(delItem));
// 			return delItem;
// 		default:
// 			return state;
// 	}
// };

//VERSION2 : createAction, createReducer
// const addTodo = createAction("ADD_TODO");
// const deleteTodo = createAction("DELETE_TODO");

// const reducer = createReducer([], {
// 	[addTodo]: (state, action) => {
// 		state.push({ text: action.payload, id: Date.now() });
// 	},
// 	[deleteTodo]: (state, action) => {
// 		return state.filter(todo => todo.id !== action.payload);
// 	},
// });

//VERSION3 : createSlice
const todos = createSlice({
	name: "todoReducer",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
		deleteTodo: (state, action) => {
			return state.filter(todo => todo.id !== action.payload);
		},
	},
});

JSON.parse(localStorage.getItem("todos")) || localStorage.setItem("todos", JSON.stringify([]));

// const store = configureStore({ reducer: todos.reducer });
console.log(todos.actions);
// export const actionCreators = {
// 	addTodo,
// 	deleteTodo,
// };

export const { addTodo, deleteTodo } = todos.actions;

export default configureStore({ reducer: todos.reducer });
