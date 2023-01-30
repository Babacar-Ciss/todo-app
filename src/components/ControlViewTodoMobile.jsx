import styled from "styled-components";
import Store from "../store";
import ControlViewDisplay from "./ControlViewDisplay";

const ControlViewTodoStyle = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.inputBackground};
	margin-bottom: 4rem;

	border-radius: 0.5rem;

	padding-top: 1.4rem;
	padding-bottom: 1.4rem;
	padding-inline: 8rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	box-shadow: ${({ themeAlt }) =>
		themeAlt === "dark"
			? "0rem 3.5rem 5rem -1.5rem rgba(194, 195, 214, 0.5)"
			: "0"};

	@media (min-width: 1440px) {
		display: none;
	}
`;

const ControlViewTodo = () => {
	const theme = Store((state) => state.theme);

	return (
		<ControlViewTodoStyle themeAlt={theme}>
			<ControlViewDisplay />
		</ControlViewTodoStyle>
	);
};

export default ControlViewTodo;
