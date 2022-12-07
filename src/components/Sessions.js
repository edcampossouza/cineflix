import { useEffect, useState } from "react";
import styled from "styled-components";
import { PageTitle } from "./Styles";
import { URL } from "../consts";
import axios from "axios";

export default function Sessions({ movie }) {
  const [days, setDays] = useState(null);
  useEffect(() => {
    if (movie) {
      const promise = axios.get(`${URL}/${movie.id}/showtimes`);
      promise.then((res) => setDays(res.data.days));
    }
  }, [movie]);
  return (
    <>
      {movie && (
        <>
          <PageTitle>Selecione o horário</PageTitle>
          <div>
            {days &&
              days.map((day) => (
                <DayContainer key={day.id}>
                  <Day>
                    {day.weekday} - {day.date}
                  </Day>
                  <TimesContainer>
                    {day.showtimes.map((showTime) => (
                      <Time key={showTime.id}>{showTime.name}</Time>
                    ))}
                  </TimesContainer>
                </DayContainer>
              ))}
          </div>
        </>
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

const Time = styled.button`
  background-color: #e8833a;
  border-width: 0;
  border-radius: 3px;
  width: 83px;
  height: 43px;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

/*


[{"id":24102021,"weekday":"Domingo","date":"24/10/2021","showtimes":[{"name":"15:00","id":257},{"name":"19:00","id":258}]},{"id":25102021,"weekday":"Segunda-feira","date":"25/10/2021","showtimes":[{"name":"15:00","id":259},{"name":"19:00","id":260}]},{"id":26102021,"weekday":"Terça-feira","date":"26/10/2021","showtimes":[{"name":"15:00","id":261},{"name":"19:00","id":262}]},{"id":27102021,"weekday":"Quarta-feira","date":"27/10/2021","showtimes":[{"name":"15:00","id":263},{"name":"19:00","id":264}]},{"id":28102021,"weekday":"Quinta-feira","date":"28/10/2021","showtimes":[{"name":"15:00","id":265},{"name":"19:00","id":266}]},{"id":29102021,"weekday":"Sexta-feira","date":"29/10/2021","showtimes":[{"name":"15:00","id":267},{"name":"19:00","id":268}]},{"id":30102021,"weekday":"Sábado","date":"30/10/2021","showtimes":[{"name":"15:00","id":269},{"name":"19:00","id":270}]},{"id":31102021,"weekday":"Domingo","date":"31/10/2021","showtimes":[{"name":"15:00","id":271},{"name":"19:00","id":272}]}]
*/
