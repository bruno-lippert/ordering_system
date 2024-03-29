import styled from "styled-components";
import { colors } from "../../../../styles/themes/theme";

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
  align-items: center;
  box-shadow: 0px 0px 5px #000;
  border-radius: 10px;
  display: flex;
  padding: 55px 10px;
  width: 30%;
  background-color: ${colors.tertiary};
  position: relative;
  gap: 50px;

  .closeModal {
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
    font-size: 2em;
  }

  @media (max-width: 1400px) {
    width: 400px;
    margin: 0 30px;
    height: 450px;
  }
`;

export const InfosProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 5px;

  input {
    border: none;
    padding: 5px;
    background-color: ${colors.primary};
    width: 100%;
    border-radius: 10px;

    &#price {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  select {
    background-color: ${colors.primary};
    border: none;
    border-radius: 10px;
    padding: 5px;
  }
`;
