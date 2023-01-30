import styled from "styled-components";

const FooterStyle = styled.div`
	margin-bottom: 10rem;

	p {
		font-size: 14px;
		line-height: 14px;
		text-align: center;
		letter-spacing: -0.194444px;
		color: ${({ theme }) => theme.todoDetailsAndControlerView};
	}
`;

const Footer = () => {
	return (
		<FooterStyle>
			<p>Drag and drop to reorder list</p>
		</FooterStyle>
	);
};

export default Footer;
