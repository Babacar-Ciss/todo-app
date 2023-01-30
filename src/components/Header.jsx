import styled from "styled-components";
import Store from "../store";
import { useState } from "react";
import { nanoid } from "nanoid";

const HeaderStyle = styled.div`
	padding-top: 4.8rem;

	@media (min-width: 1440px) {
		padding-top: 7rem;
	} ;
`;

const TitleAndLogo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4rem;

	h1 {
		font-size: 3rem;
		line-height: 3rem;
		font-weight: 700;
		letter-spacing: 1rem;

		@media (min-width: 1440px) {
			color: #ffffff;
			font-size: 40px;
			line-height: 40px;
			font-weight: 700;
			letter-spacing: 15px;
		}
	}

	svg {
		cursor: pointer;
	}
`;

const InputWrapper = styled.div`
	padding-top: 1.4rem;
	padding-bottom: 1.4rem;
	background-color: ${({ theme }) => theme.inputBackground};
	border-radius: 0.5rem;
	padding-left: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 4rem;

	@media (min-width: 1440px) {
		max-width: 54rem;
		margin-inline: auto;
	}

	form {
		display: flex;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
		margin-right: 1.2rem;
		cursor: pointer;
	}

	input {
		width: 90%;
		border: none;
		font-family: "Josefin Sans";
		caret-color: #3a7cfd;
		background-color: ${({ theme }) => theme.inputBackground};
		color: ${({ theme }) => theme.inputFontColor};

		:placeholder {
			color: ${({ theme }) => theme.placeholder};
			font-size: 1.2rem;
			line-height: 1.2rem;
			letter-spacing: -0.166667px;
		}

		:focus {
			outline: none;
		}
	}
`;

const ValidationButton = styled.button`
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
	margin-right: 1.2rem;
	border: none;
	cursor: pointer;
`;

const Header = () => {
	const theme = Store((state) => state.theme);
	const toggleTheme = Store((state) => state.toggleTheme);
	const addOneTodo = Store((state) => state.addOneTodo);
	// const inputValue = Store((state) => state.inputValue);
	// const setInputValue = Store((state) => state.setInputValue);
	const todos = Store((state) => state.todos);

	const [inputValue, setInputValue] = useState("");

	// console.log(inputValue);

	function addTodoItem(e) {
		e.preventDefault();
		addOneTodo({
			id: nanoid(),
			isActive: true,
			todoDescription: inputValue,
		});
		setInputValue("");
		console.log(inputValue);
		console.log(todos);
	}

	return (
		<HeaderStyle theme={theme}>
			<TitleAndLogo>
				<h1> TODO </h1>
				{theme === "light" ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						onClick={() => toggleTheme()}
					>
						<path
							fill="#FFF"
							fillRule="evenodd"
							d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						onClick={() => toggleTheme()}
					>
						<path
							fill="#FFF"
							fillRule="evenodd"
							d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
						/>
					</svg>
				)}
			</TitleAndLogo>
			<InputWrapper>
				<form onSubmit={addTodoItem}>
					<ValidationButton type="submit">
						<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
							<path
								fill="none"
								stroke="#FFF"
								strokeWidthnpm
								start="2"
								d="M1 4.304L3.696 7l6-6"
							/>
						</svg>
					</ValidationButton>
					<input
						type="text"
						value={inputValue}
						placeholder="Create a new todo…"
						onInput={(e) => setInputValue(e.currentTarget.value)}
					/>
				</form>
			</InputWrapper>
		</HeaderStyle>
	);
};

export default Header;
