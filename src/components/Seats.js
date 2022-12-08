import { PageTitle } from "./Styles";
import { URL } from "../consts";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Seats({ session }) {
  const [seats, setSeats] = useState(null);

  useEffect(() => {
    if (session) {
      const promise = axios.get(`${URL}/showtimes/${session.id}/seats`);
      promise.then((res) => setSeats(res.data));
    }
  }, [session]);
  return (
    <>
      <PageTitle>Selecione o(s) assento(s)</PageTitle>
      <SeatsContainer>
        {seats === null
          ? "Carregando..."
          : seats.seats.map((seat) => <SeatStyle>{seat.name}</SeatStyle>)}
      </SeatsContainer>
      <CaptionsContainer>
        <div>
          <Caption color="#1AAE9E" borderColor="#0E7D71" />
          <span>Selecionado</span>
        </div>
        <div>
          <Caption color="#C3CFD9" borderColor="#7B8B99" />
          <span>Disponível</span>
        </div>
        <div>
          <Caption color="#FBE192" borderColor="#F7C52B" />
          <span>Indisponível</span>
        </div>
      </CaptionsContainer>
    </>
  );
}
const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
`;

const SeatStyle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 13px;
  font-size: 11px;
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  margin-bottom: 18px;
  border: 1px solid #808f9d;
`;

const CaptionsContainer = styled.div`
  width: 100%;
  max-width: 340px;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    font-size: 13px;
  }
`;
const Caption = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.color};
`;
