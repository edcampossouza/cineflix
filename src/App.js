import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Movies from "./components/Movies";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "./consts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${URL}/movies/`);
    promise.then((res) => setMovies(res.data));
  }, []);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <StyledApp>
          <StyledHeader>CINEFLEX</StyledHeader>
          <AppContent>
            <Routes>
              <Route
                path="/"
                element={
                  <Movies movies={movies} selectMovie={setSelectedMovie} />
                }
              />
              <Route
                path="/sessoes/:idFilme"
                element={
                  <Sessions
                    movie={selectedMovie}
                    selectSession={setSelectedSession}
                  />
                }
              />
              <Route
                path="/assentos/:idSessao"
                element={<Seats session={selectedSession} />}
              />
            </Routes>
          </AppContent>
        </StyledApp>
      </BrowserRouter>
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
  z-index: 2;
`;

const AppContent = styled.div`
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
