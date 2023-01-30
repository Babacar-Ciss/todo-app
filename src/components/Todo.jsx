/*eslint-disable */
import styled from "styled-components";
import { useRef, useEffect } from "react";
import Store from "../store";
import CustomCheckbox from "./CustomCheckbox";

const TodoStyle = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.inputBackground};
	border-bottom: 1px solid ${({ theme }) => theme.borderBottomColor};
	padding-top: 1.4rem;
	padding-bottom: 1.4rem;
	padding-left: 2rem;

	@media (min-width: 1440px) {
		padding-top: 2rem;
		padding-bottom: 1.9rem;
		padding-left: 2.4rem;
	}

	:first-child {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	:hover {
		cursor: grab;
	}

	:active,
	:focus {
		cursor: grabbing;
	}

	input {
		margin-right: 1.2rem;

		@media (min-width: 1440px) {
			margin-right: 2.4rem;
		}
	}

	p {
		color: ${({ theme }) => theme.todoDescriptionComplete};
		opacity: ${({ isTodoCompleted }) => (isTodoCompleted ? "0.5" : "1")};
		font-size: 1.2rem;
		line-height: 1.2rem;
		letter-spacing: -0.166667px;
		text-decoration: ${({ isTodoCompleted }) =>
			isTodoCompleted ? "line-through" : "none"};

		@media (min-width: 1440px) {
			font-weight: 400;
			font-size: 1.8rem;
			line-height: 1.8rem;
			letter-spacing: -0.25px;
		}
	}

	svg {
		scale: 0.78;
		margin-right: 2rem;
		margin-left: auto;
		cursor: pointer;
	}
`;

const Todo = ({ isActive, todoDescription, todoId }) => {
	const deleteOneTodo = Store((state) => state.deleteOneTodo);
	const ToggleTodoChecked = Store((state) => state.ToggleTodoChecked);

	return (
		<TodoStyle isTodoCompleted={!isActive}>
			<CustomCheckbox
				ToggleTodoChecked={ToggleTodoChecked}
				index={todoId}
				isActive={isActive}
			/>
			<p>{todoDescription}</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				onClick={() => deleteOneTodo(todoId)}
			>
				<path
					fill="#494C6B"
					fillRule="evenodd"
					d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
				/>
			</svg>
		</TodoStyle>
	);
};

export default Todo;
