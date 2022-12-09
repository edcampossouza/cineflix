import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Footer({ movie, session }) {
  const { pathname } = useLocation();
  if (
    movie &&
    (pathname.includes("sessoes") || pathname.includes("assentos"))
  ) {
    return (
      <FooterStyle data-test="footer">
        <ImgContainer>
          <img src={movie.posterURL} alt={`poster for ${movie.title}`} />
        </ImgContainer>
        <div>
          <div>{movie.title}</div>
          {session && <div>{`${session.weekday} - ${session.name}`}</div>}
        </div>
      </FooterStyle>
    );
  }
  return null;
}

const FooterStyle = styled.div`
  height: 117px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #dfe6ed;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  img {
    margin-left: 10px;
    margin-right: 10px;
    width: 48px;
    height: 72px;
    border: 5px solid #ffffff;
  }
`;
