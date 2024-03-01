import { type } from "os";
import styled from "styled-components";
import { colors } from "../../../styles/themes/theme";

export const FilterContainer = styled.div`
  width: 100%;
  background-color: ${colors.primary};
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  height: 110px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: none;
    border-radius: 5px;
    background-color: ${colors.tertiary};
    padding: 2px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  .inputContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
    flex-wrap: wrap;
  }
`;
