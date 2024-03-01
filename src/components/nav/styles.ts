import styled from "styled-components";
import { colors, fonts } from "../../styles/themes/theme";

export const NavContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;

  @media (max-width: 590px) {
    height: 100px;
  }
`;

export const NavItensContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 70%;

  @media (max-width: 590px) {
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    margin-right: 10px;
    width: 100px;
  }
`;

export const Navitens = styled.article`
  background-color: ${colors.primary};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  max-width: 200px;

  border-radius: 0 0 15px 15px;

  cursor: pointer;

  p {
    font-size: 1.5em;
    font-family: ${fonts.arial};
    text-align: center;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }

  &:active {
    background-color: ${colors.secondary};
  }

  @media (max-width: 1100px) {
    max-width: 150px;

    p {
      font-size: 1.3em;
    }
  }
  @media (max-width: 830px) {
    max-width: 100px;

    p {
      font-size: 1em;
    }
  }
  @media (max-width: 650px) {
    max-width: 80px;
    height: 50px;
  }
  @media (max-width: 590px) {
    height: 0;
    border-radius: 10px;
    padding: 5px;
    width: 100px;
    p {
      padding: 3px;
    }
  }
`;

export const NavLoginContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  padding: 10px;

  background-color: ${colors.primary};
  display: flex;
  flex: 1;

  max-width: 250px;

  border-radius: 0 0 15px 15px;

  input[type="submit"] {
    border: none;
    color: #fff;
    background-color: ${colors.primary};
    width: 60px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1100px) {
    max-width: 200px;
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;

export const Navlogin = styled.article`
  display: flex;
  flex-direction: column;
  gap: 7px;

  p {
    font-family: ${fonts.arial};
    margin: auto;
    text-align: center;
    color: #fff;
  }
`;

export const logout = styled.div``;
export const company = styled.div``;
export const user = styled.div``;

export const Main = styled.main``;
