import styled from "styled-components";

export const PageTitle = styled.div`
  font-size: 24px;
  color: #293845;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonStyle = styled.button`
  background-color: #e8833a;
  border-width: 0;
  border-radius: 3px;
  min-width: 83px;
  height: 43px;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 327px;
`;

export const InputTitle = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  color: #293845;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 51px;
  font-size: 18px;
  margin-bottom: 5px;
  font-style: italic;
  &::placeholder {
    color: #d4d4d4;
  }
  border: 1px solid #d4d4d4;
  border-radius: 3px;
`;
