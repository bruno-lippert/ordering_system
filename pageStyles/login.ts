import styled from 'styled-components';
import { colors } from '../src/styles/themes/theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    background-color: ${colors.quinary};

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

    input {
        border: none;
        padding: 5px;
        border-radius: 5px;

        display: flex;
    }

    .login {
        width: 250px;
    }

    .submit {
        margin-top: 10px;

        &:hover {
            cursor: pointer;
        }
        &:active {
            background-color: ${colors.quaternary};
        }
    }
    
    h1 {
        color: #000;
        font-size: 2.5em;

        margin-bottom: 30px;
    }
`;