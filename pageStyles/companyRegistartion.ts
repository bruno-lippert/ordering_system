import styled from 'styled-components';
import { colors, fonts } from '../src/styles/themes/theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    background-color: ${colors.quinary};
`;

export const Company = styled.main `

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

    h1 {
        margin-bottom: 20px;
    }

    input[type="text"], select {
        
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        width: 250px;
        border: none;
        padding: 2px;
    }
    input[type="submit"] {
        border-radius: 5px;
        padding: 5px;
        margin: 15px 0 5px 0;
        background-color: #fff;
        border: none;

        &:hover {
            cursor: pointer;
        }

        &:active {
            background-color: ${colors.quaternary};
        }
    }
`;
