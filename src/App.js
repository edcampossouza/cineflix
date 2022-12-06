import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>cineflix</StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  font-family: "Roboto", sans-serif;
`;
export default App;
