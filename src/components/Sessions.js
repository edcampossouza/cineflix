import { useEffect, useState } from "react";
import styled from "styled-components";
import { PageTitle } from "./Styles";
import { URL } from "../consts";
import { ButtonStyle } from "./Styles";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Sessions({ selectSession }) {
  const { idFilme } = useParams();
  const [days, setDays] = useState(null);

  useEffect(() => {
    if (idFilme) {
      const promise = axios.get(`${URL}/movies/${idFilme}/showtimes`);
      promise.then((res) => setDays(res.data.days));
    }
  }, [idFilme]);
  return (
    <>
      {days ? (
        <>
          <PageTitle>Selecione o horário</PageTitle>
          <PageContainer>
            {days &&
              days.map((day) => (
                <DayContainer key={day.id} data-test="movie-day">
                  <Day>
                    {day.weekday} - {day.date}
                  </Day>
                  <TimesContainer>
                    {day.showtimes.map((showTime) => (
                      <Link to={`/assentos/${showTime.id}`} key={showTime.id}>
                        <ButtonStyle
                          data-test="showtime"
                          onClick={() => {
                            selectSession({
                              ...showTime,
                              weekday: day.weekday,
                              date: day.date,
                            });
                          }}
                        >
                          {showTime.name}
                        </ButtonStyle>
                      </Link>
                    ))}
                  </TimesContainer>
                </DayContainer>
              ))}
          </PageContainer>
        </>
      ) : (
        <span>Carregando...</span>
      )}
    </>
  );
}

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Day = styled.div`
  margin-bottom: 22px;
`;

const TimesContainer = styled.div`
  margin-bottom: 22px;
`;

const PageContainer = styled.div`
  margin-bottom: 117px;
`;
