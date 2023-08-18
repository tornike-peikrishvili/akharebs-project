import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./components/header";
import Works from "./components/works";
import Contact from "./components/contact";
import Copyright from "./components/copyright";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <Header></Header>
      <Works></Works>
      <Contact></Contact>
      <Copyright></Copyright>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default App;
