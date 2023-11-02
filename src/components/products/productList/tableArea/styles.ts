import styled from 'styled-components';

export const Container = styled.section`

`;

export const Table = styled.table`
    width: 100%;
    text-align: left;
    padding: 0 5px;

`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${ props => props.width ? `${props.width}%` : `auto`} ;
`