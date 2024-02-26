import styled from 'styled-components';
import { colors } from '../src/styles/themes/theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    background-color: ${colors.secondary};

`;

export const Login = styled.main`

    *{
        margin: 0;
        padding: 0;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 500px;
    width: 400px;
    background-color: ${colors.primary};

    border-radius: 10px;

    gap: 10px;
    margin: 0 20px;

    .inputsContainer {
        width: 85%;
    }

    input {
        border: none;
        padding: 5px;
        border-radius: 5px;

        display: flex;
    }

    .login {
        width: 100%;
    }

    .submit {
        margin-top: 10px;

        &:hover {
            cursor: pointer;
        }
        &:active {
            background-color: ${colors.tertiary};
        }
    }
    
    h1 {
        color: #000;
        font-size: 2.5em;

        margin-bottom: 30px;
    }

    .companyRegistration {
        &:hover {
            color: ${colors.secondary};
        }
    }

    @media(max-width: 350px) {
        height: 400px;
        h1 {
            font-size: 1.9em;
        }
    }
`;