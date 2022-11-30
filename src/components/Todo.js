import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const Todo = ({ text, id }) => {
	const dispatch = useDispatch();
	const onClick = e => {
		dispatch(actionCreators.deleteTodo(id));
	};
	return (
		<li>
			<Link to={`/${id}`}>{text}</Link>
			<button onClick={onClick}>DEL</button>
		</li>
	);
};

export default Todo;
