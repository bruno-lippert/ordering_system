import styled from 'styled-components';
import { colors } from '../src/styles/themes/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;

    background-color: ${colors.quinary};
    height: 100vh;
    padding: 0 50px 50px 50px;
`;