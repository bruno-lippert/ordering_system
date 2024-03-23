import styled from 'styled-components';
import { colors } from '../../styles/themes/theme';

export const MainContainer = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
    height: 82%;
`;


export const Content = styled.div`
    height: 100%;
    border-radius: 35px;
`;

export const ModulosContainer = styled.div`
    height: 100%;
    position: relative;
    background-color: ${colors.secondary};
    border-radius: 35px;
`;