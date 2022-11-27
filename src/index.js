import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
	console.log(count, action);
	switch (action.type) {
		case ADD:
			return count + 1;
		case MINUS:
			return count - 1;
		default:
			return count;
	}
};
const countStore = createStore(countModifier);
add.addEventListener("click", () => {
	countStore.dispatch({ type: "ADD" });
});
minus.addEventListener("click", () => {
	countStore.dispatch({ type: "MINUS" });
});

const onChange = () => {
	number.textContent = countStore.getState();
};
countStore.subscribe(onChange);
