import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Movies from "./components/Movies";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <StyledHeader>CINEFLEX</StyledHeader>
        <AppContent>
          <Movies />
          <Sessions />
          <Seats />
        </AppContent>
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  font-family: "Roboto", sans-serif;
`;

const StyledHeader = styled.div`
  height: 67px;
  width: 100%;
  font-size: 34px;
  color: #e8833a;
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
`;

const AppContent = styled.div`
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export default App;
