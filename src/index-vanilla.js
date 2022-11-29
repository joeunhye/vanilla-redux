import { createStore } from "redux";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addTodo = text => ({ type: ADD_TODO, text });
const deleteTodo = id => ({ type: DELETE_TODO, id });

const reducer = (state = [], action) => {
	console.log(state, action);
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
const dispatchAddTodo = text => {
	store.dispatch(addTodo(text));
};
const dispatchDeleteTodo = e => {
	const id = parseInt(e.target.parentNode.id);
	store.dispatch(deleteTodo(id));
};
const onSubmit = e => {
	e.preventDefault();
	const todo = input.value;
	input.value = "";
	dispatchAddTodo(todo);
};
const paintTodos = () => {
	const todos = store.getState();
	ul.innerHTML = "";
	todos.forEach(todo => {
		const li = document.createElement("li");
		const btn = document.createElement("button");
		btn.textContent = "DEL";
		btn.addEventListener("click", dispatchDeleteTodo);
		li.id = todo.id;
		li.textContent = todo.text;
		ul.appendChild(li);
		li.appendChild(btn);
	});
};
store.subscribe(paintTodos);

form.addEventListener("submit", onSubmit);
