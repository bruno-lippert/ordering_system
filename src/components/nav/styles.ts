import styled from 'styled-components';
import { colors, fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
`; 

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
`;


export const NavItensContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 70%;
`;
export const Navitens = styled.article`
    background-color: ${colors.primary};
    display: flex;
    flex: 1;

    max-width: 200px;

    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

    cursor: pointer;

    p {
        font-size: 1.5em;
        font-family: ${fonts.arial};
        margin: auto;
        text-align: center;
        color: #fff;

        &:hover {
            text-decoration: underline;
        }
    }

    &:active {
        background-color: ${colors.secondary};
    }
`;

export const NavLoginsContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    background-color: ${colors.primary};
    display: flex;
    flex: 1;

    max-width: 250px;
    
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

    input[type=submit] {
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
`;
export const Navlogin = styled.article`
    display: flex;
    flex-direction: column;
    gap: 7px;

    p{
        font-family: ${fonts.arial};
        margin: auto;
        text-align: center;
        color: #fff;
    }
`;
export const logout = styled.div`

`;
export const company = styled.div`

`;
export const user = styled.div`

`;

export const Main = styled.main`

`;