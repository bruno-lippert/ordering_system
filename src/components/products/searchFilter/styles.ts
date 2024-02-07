import { type } from 'os';
import styled from 'styled-components';
import { colors } from '../../../styles/themes/theme';

export const Container = styled.div`
    width: 100%;
    background-color: ${colors.primary};
    border-top-right-radius: 35px;
    border-top-left-radius: 35px;
    height: 110px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    input {
        border: none;
        border-radius: 5px;
        background-color: ${colors.quaternary};
        padding: 2px;

    }

    .search {
        padding: 5px;
        cursor: pointer;
    }
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    .input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 5px;
    }
`;
