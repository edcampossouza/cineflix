import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "./Styles";
export default function Movies({ movies, selectMovie }) {
  return (
    <>
      <PageTitle>Selecione o filme</PageTitle>
      <MoviesContainer>
        {movies === null
          ? "Carregando..."
          : movies.map((m) => (
              <Link to={`/sessoes/${m.id}`} key={m.id}>
                <MovieCard onClick={() => selectMovie(m)}>
                  <img src={m.posterURL} alt={m.title} />
                </MovieCard>
              </Link>
            ))}
      </MoviesContainer>
    </>
  );
}

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MovieCard = styled.div`
  height: 209px;
  width: 145px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 27px;
  img {
    height: 193px;
    width: 129px;
  }
  &:hover {
    cursor: pointer;
  }
`;
