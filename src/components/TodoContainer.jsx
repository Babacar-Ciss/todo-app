import styled from "styled-components";
import Todo from "./Todo";
import TodoDetails from "./TodoDetails";
import Store from "../store";
import { Reorder } from "framer-motion";
import { useState } from "react";

const TodoContainerStyle = styled.div`
	/* width: 87%;
	margin-inline: auto; */
	margin-top: -2.3rem;
	margin-bottom: 1.6rem;
	box-shadow: ${({ theme }) =>
		theme === "dark" ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)" : "0"};

	:only-child {
		background-color: aqua;
	}

	@media (min-width: 1440px) {
		/* margin-top: -7.8rem; */
		box-shadow: ${({ theme }) =>
			theme === "dark"
				? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
				: "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"};
		margin-bottom: 4.9rem;
	}
`;

const TodoContainer = () => {
	const theme = Store((state) => state.theme);
	const todos = Store((state) => state.todos);
	const view = Store((state) => state.view);

	return (
		<TodoContainerStyle theme={theme}>
			{todos
				.filter((todo) =>
					view === "Active"
						? todo.isActive === true
						: view === "Completed"
						? todo.isActive === false
						: todo
				)
				.map((todo) => (
					<Todo key={todo.id} {...todo} todoId={todo.id} />
				))}
			<TodoDetails />
		</TodoContainerStyle>
	);
};

export default TodoContainer;
