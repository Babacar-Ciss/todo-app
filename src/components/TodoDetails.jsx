import styled from "styled-components";
import Store from "../store";
import ControlViewDisplay from "./ControlViewDisplay";

const TodoDetailsStyle = styled.div`
	color: ${({ theme }) => theme.todoDetailsAndControlerView};
	background-color: ${({ theme }) => theme.inputBackground};
	border-bottom: 1px solid #e3e4f1;
	font-size: 1.2rem;
	line-height: 1.2rem;
	padding-top: 1.4rem;
	padding-bottom: 1.4rem;
	padding-inline: 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	border-bottom: none;

	@media (min-width: 1440px) {
		font-size: 1.4rem;
		line-height: 1.4rem;
		padding-inline: 2.4rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	p:last-child {
		cursor: pointer;
		transition: color 0.2s;

		:hover {
			color: ${({ theme }) => theme.hoverControlerViewTodo};
			transition: color 0.2s;
		}
	}
`;

const ControlViewDisplayContainer = styled.div`
	display: none;

	@media (min-width: 1440px) {
		display: flex;
		flex-grow: 1;
		justify-content: space-between;
		padding-inline: 6rem;
	}
`;

const TodoDetails = () => {
	const todos = Store((state) => state.todos);
	const clearAllCompleteTodos = Store((state) => state.clearAllCompleteTodos);

	const todosLeft = todos.filter((todo) => todo.isActive === true).length;

	return (
		<TodoDetailsStyle>
			<p>{todosLeft} items left</p>
			<ControlViewDisplayContainer>
				<ControlViewDisplay />
			</ControlViewDisplayContainer>
			<p onClick={() => clearAllCompleteTodos()}>Clear Completed</p>
		</TodoDetailsStyle>
	);
};

export default TodoDetails;
