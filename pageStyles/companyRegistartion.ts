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

    font-family: ${fonts.arial};

    height: 500px;
    width: 400px;
    background-color: ${colors.primary};

    border-radius: 10px;

    gap: 10px;
`;
