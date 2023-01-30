import styled from "styled-components";
import { useState } from "react";
import Store from "../store";

const items = ["All", "Active", "Completed"];

const P = styled.p`
	font-weight: 700;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: -0.194444px;
	color: ${({ isSelected, theme }) =>
		isSelected ? "#3A7CFD" : theme.todoDetailsAndControlerView};
	cursor: pointer;
	transition: all 0.2s;

	:hover {
		color: ${({ theme, isSelected }) =>
			isSelected ? "#3A7CFD" : theme.hoverControlerViewTodo};
		transition: all 0.2s;
	}
`;

const ControlViewDisplay = () => {
	const setView = Store((state) => state.setView);

	const [activeViewController, setActiveViewController] = useState(0);

	const toggleActiveViewController = (index) => {
		if (activeViewController === index) {
			setActiveViewController(null);
		}
		setActiveViewController(index);
	};

	return (
		<>
			{items.map((item, index) => (
				<P
					key={index}
					isSelected={activeViewController === index}
					onClick={() => {
						toggleActiveViewController(index);
						setView(item);
					}}
				>
					{item}
				</P>
			))}
		</>
	);
};

export default ControlViewDisplay;
