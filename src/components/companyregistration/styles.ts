import styled from "styled-components";
import { colors, fonts } from "../../styles/themes/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: ${colors.secondary};
`;

export const Company = styled.main`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 20px;

  height: 550px;
  width: 400px;
  background-color: ${colors.primary};

  border-radius: 10px;

  gap: 10px;

  h1 {
    margin-bottom: 20px;
  }

  .inputsContainer {
    margin: 0 20px;
    width: 85%;

    .cepContainer {
      display: flex;
      gap: 10px;
    }
  }

  input[type="text"],
  input[type="number"],
  select {
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    padding: 2px;
    background-color: ${colors.secondary};

    &#cep {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  input[type="submit"] {
    border-radius: 5px;
    padding: 5px;
    margin: 15px 0 5px 0;
    background-color: ${colors.secondary};
    border: none;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background-color: ${colors.tertiary};
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 1.6em;
    }
  }

  @media (max-width: 270px) {
    h1 {
      text-align: center;
    }
    input[type="submit"] {
      margin: 5px 0;
    }
  }
`;
