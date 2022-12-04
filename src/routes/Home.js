import { connect, useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTodo } from "../store";
import Todo from "../components/Todo";

const Home = () => {
	const [text, setText] = useState("");
	const onChange = e => {
		setText(e.target.value);
	};
	//hooks
	const todos = useSelector(state => state);
	console.log(todos);
	const dispatch = useDispatch();
	const onSubmit = e => {
		e.preventDefault();
		//addTodo(text);
		dispatch(addTodo(text));
		setText("");
	};

	return (
		<>
			<h1>To do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>ADD</button>
			</form>
			<ul>
				{todos.map(todo => (
					<Todo {...todo} key={todo.id} />
				))}
			</ul>
		</>
	);
};

// const mapStateToProps = state => {
// 	return { todos: state };
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		addTodo: text => dispatch(actionCreators.addTodo(text)),
// 	};
// };

export default Home;
