import styled from "styled-components";
import checkboxIcon from "../assets/icon-check.svg";
import { useRef, useEffect } from "react";

const Container = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border-radius: 50%;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;

		:checked ~ span {
			background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
			border: none;
		}

		:not(:checked) ~ span img {
			display: none;
		}
	}

	span:after {
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 2rem;
	width: 2rem;
	border-radius: 50%;
	border: 1px solid #e3e4f1;
	display: flex;
	align-items: center;
	justify-content: center;

	:after {
		content: "";
		position: absolute;
		display: none;
	}
`;

const CustomCheckbox = ({ isActive, ToggleTodoChecked, index }) => {
	const checkbox = useRef();

	useEffect(() => {
		checkbox.current.checked = !isActive;
	});

	return (
		<>
			<Container>
				<input
					ref={checkbox}
					type="checkbox"
					defaultChecked={!isActive}
					onClick={() => ToggleTodoChecked(index)}
				/>
				<Checkmark>
					<img src={checkboxIcon} alt="Checkbox" />
				</Checkmark>
			</Container>
		</>
	);
};

export default CustomCheckbox;
