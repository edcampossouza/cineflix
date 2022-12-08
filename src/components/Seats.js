import {
  ButtonStyle,
  InputsContainer,
  InputStyle,
  InputTitle,
  PageTitle,
} from "./Styles";
import { URL } from "../consts";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  function handleClick(seat) {
    if (!seat.isAvailable) alert("Esse assento não está disponível");
    let newSelection = [...selectedSeats];
    if (newSelection.includes(seat))
      newSelection = newSelection.filter((s) => s !== seat);
    else newSelection.push(seat);
    setSelectedSeats(newSelection);
  }

  function handleReservation() {
    if (validadeInputs()) {
      const promise = axios.post(`${URL}/seats/book-many`, {
        ids: selectedSeats.map((s) => s.id),
        name,
        cpf,
      });
      promise.then((res) => console.log(res.data));
      promise.catch((err) => alert(err.response.data));
    } else {
      console.log("dados invalidos");
    }
  }

  function handleChange(e) {
    let { value } = e.target;
    if (e.target.name === "name") setName(value);
    else if (e.target.name === "cpf") {
      value = value.replace(/\D/g, "").substring(0, 11);
      setCpf(value);
    }
  }

  function validadeInputs() {
    return selectedSeats.length > 0 && cpf.length === 11 && name.length > 0;
  }

  useEffect(() => {
    if (idSessao) {
      const promise = axios.get(`${URL}/showtimes/${idSessao}/seats`);
      promise.then((res) => setSeats(res.data));
    }
  }, [idSessao]);

  return (
    <>
      <PageTitle>Selecione o(s) assento(s)</PageTitle>
      <SeatsContainer>
        {seats === null
          ? "Carregando..."
          : seats.seats.map((seat) => (
              <SeatStyle
                available={seat.isAvailable}
                selected={selectedSeats.includes(seat)}
                onClick={() => handleClick(seat)}
                key={seat.id}
              >
                {seat.name}
              </SeatStyle>
            ))}
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
      <InputsContainer>
        <InputTitle>Nome do comprador:</InputTitle>
        <InputStyle
          placeholder="Digite seu nome..."
          value={name}
          name="name"
          onChange={handleChange}
        />
        <InputTitle>CPF do comprador:</InputTitle>
        <InputStyle
          placeholder="Digite seu CPF..."
          value={cpf}
          name="cpf"
          onChange={handleChange}
        />
      </InputsContainer>
      <ReserveButton isEnabled={validadeInputs()} onClick={handleReservation}>
        Reservar assento(s)
      </ReserveButton>
    </>
  );
}

const ReserveButton = styled(ButtonStyle)`
  width: 225px;
  margin-top: 50px;
  margin-bottom: 30px;
  background-color: ${(props) => (props.isEnabled ? "#e8833a" : "#fCC66d")};
  &:hover {
    cursor: ${(props) => (props.isEnabled ? "pointer" : "default")};
  }
`;

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
  background-color: ${(props) =>
    props.available ? (props.selected ? "#1AAE9E" : "#C3CFD9") : "#FBE192"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  margin-bottom: 18px;
  border: 1px solid
    ${(props) =>
      props.available ? (props.selected ? "#0E7D71" : "#808F9D") : "#F7C52B"};
  &:hover {
    cursor: ${(props) => (props.available ? "pointer" : "default")};
  }
`;

const CaptionsContainer = styled.div`
  width: 100%;
  max-width: 340px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 45px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    margin-top: 5px;
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
