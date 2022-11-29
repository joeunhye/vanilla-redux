import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store";

const Todo = ({ text, id }) => {
	const dispatch = useDispatch();
	const onClick = e => {
		dispatch(actionCreators.deleteTodo(id));
	};
	return (
		<li>
			{text}
			<button onClick={onClick}>DEL</button>
		</li>
	);
};

export default Todo;
