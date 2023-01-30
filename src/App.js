import Header from "./components/Header";
import Footer from "./components/Footer";
import ControlViewTodoMobile from "./components/ControlViewTodoMobile";
import TodoConTainer from "./components/TodoContainer";
import GlobalStyle from "./style/globalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Store from "./store";
import bg_mobile_dark from "../src/assets/bg-mobile-dark.jpg";
import bg_mobile_light from "../src/assets/bg-mobile-light.jpg";
import bg_desktop_dark from "../src/assets/bg-desktop-dark.jpg";
import bg_desktop_light from "../src/assets/bg-desktop-light.jpg";

const AppStyle = styled.div`
	background-color: ${({ theme }) => theme.bgColor};
	min-height: 100vh;
`;

const Container = styled.div`
	padding-inline: 2.5rem;
	margin-inline: auto;
	position: relative;

	@media (min-width: 1440px) {
		max-width: 54rem;
		margin-inline: auto;
	}
`;

const HeroContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 20rem;
	width: 100%;

	background-image: url(${(props) =>
		props.theme === "light" ? bg_mobile_dark : bg_mobile_light});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	@media (min-width: 1440px) {
		height: 30rem;
		background-image: url(${(props) =>
			props.theme === "light" ? bg_desktop_dark : bg_desktop_light});
	} ;
`;

const lightTheme = {
	inputBackground: "#FFF",
	bgColor: "#FAFAFA",
	inputFontColor: "#393A4B",
	placeholder: "#767992",
	borderBottomColor: "#E3E4F1",
	todoDescriptionComplete: "#494C6B",
	todoDetailsAndControlerView: "#9495A5",
	hoverControlerViewTodo: "#494C6B",
};

const darkTheme = {
	inputBackground: "#25273D",
	bgColor: "#16171C",
	inputFontColor: "#C8CBE7",
	placeholder: "#9495A5",
	borderBottomColor: "#393A4B",
	todoDescriptionComplete: "#C8CBE7",
	todoDetailsAndControlerView: "#5B5E7E",
	hoverControlerViewTodo: "#E3E4F1",
};

const App = () => {
	const theme = Store((state) => state.theme);

	return (
		<ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
			<GlobalStyle />
			<AppStyle>
				<HeroContainer theme={theme} />
				<Container>
					<Header />
					<TodoConTainer />
					<ControlViewTodoMobile />
					<Footer />
				</Container>
			</AppStyle>
		</ThemeProvider>
	);
};

export default App;
