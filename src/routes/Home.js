import { connect } from "react-redux";
import React, { useState } from "react";
import { actionCreators } from "../store";

const Home = ({ todos, addTodo }) => {
	const [text, setText] = useState("");
	const onChange = e => {
		setText(e.target.value);
	};
	const onSubmit = e => {
		e.preventDefault();
		addTodo(text);
		setText("");
	};
	return (
		<>
			<h1>To do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>ADD</button>
			</form>
			<ul>{JSON.stringify(todos)}</ul>
		</>
	);
};

const mapStateToProps = state => {
	return { todos: state };
};

const mapDispatchToProps = dispatch => {
	return {
		addTodo: text => dispatch(actionCreators.addTodo(text)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
