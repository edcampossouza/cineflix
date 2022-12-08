import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonStyle, PageTitle } from "./Styles";

export default function Success({ person, reservedSeats, movie, time }) {
  return (
    <>
      <SuccessPageTitle>Pedido feito com sucesso!</SuccessPageTitle>
      <Container>
        <TitleStyle>Filme e sessão</TitleStyle>
        <TextStyle>{movie.title}</TextStyle>
        <TextStyle>{time}</TextStyle>
        <EmptySpace />
        <TitleStyle>Ingressos</TitleStyle>
        <TextStyle>
          {reservedSeats.map((seat) => (
            <div key={seat}>Assento {seat}</div>
          ))}
        </TextStyle>
        <EmptySpace />
        <TitleStyle>Comprador</TitleStyle>
        <TextStyle>
          <div>Nome: {person.name}</div>
          <div>CPF: {person.cpf}</div>
        </TextStyle>
      </Container>
      <Link to="/">
        <BackButtonStyle>Voltar pra Home</BackButtonStyle>
      </Link>
    </>
  );
}

const SuccessPageTitle = styled(PageTitle)`
  color: #247a6b;
  font-weight: bold;
`;

const TitleStyle = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const TextStyle = styled.div`
  font-size: 22px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 25px;
  margin-bottom: 50px;
`;

const BackButtonStyle = styled(ButtonStyle)`
  width: 225px;
`;

const EmptySpace = styled.div`
  width: 100%;
  height: 30px;
`;
