import styled from "styled-components";
import { colors } from "../../../styles/themes/theme";

export const ProductModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
  backdrop-filter: blur(5px); /* Aplica o efeito de desfoque */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #000;
  border-radius: 10px;
  display: flex;
  padding: 20px 10px;
  width: 80%;
  background-color: ${colors.quaternary};
  position: relative;

  /* .closeModal {
        position: absolute;
        top: 7px;
        right: 7px;
        cursor: pointer;
    } */
`;
