import styled from "styled-components";
import { colors } from "../../../styles/themes/theme";

export const Container = styled.section`
  display: flex;
  gap: 15px;
  margin: 0 0 20px 20px;
`;

export const Button = styled.button`
    border: 1px solid black;
    border-radius: 20px;
    width: 120px;
    height: 60px;
    background-color: ${colors.primary};
    cursor: pointer;

    &:active {
        background-color: ${colors.secondary};
    }
`;
