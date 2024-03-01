import styled from "styled-components";
import { colors } from "../../../styles/themes/theme";

export const Container = styled.section`
  display: flex;
  gap: 15px;
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

    @media (max-width: 450px) {
      width: 80px;
      height: 40px;
    }
`;
