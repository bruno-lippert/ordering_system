import styled from 'styled-components';
import { colors } from '../../styles/themes/theme';

export const Container = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
    height: 82%;
`;


export const Content = styled.div`
    background-color: ${colors.quaternary};
    height: 100%;
    border-radius: 35px;
`;