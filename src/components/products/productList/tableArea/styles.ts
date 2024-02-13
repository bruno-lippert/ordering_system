import styled from "styled-components";
import { colors, fonts } from "../../../../styles/themes/theme";

export const TableAreaContainer = styled.section``;

export const Table = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 5px;
`;

export const TableHeadContainer = styled.div`
  display: flex;
  margin: 10px 0;
  height: 50px;
`;

export const TableHeadColumn = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? `${props.width}%` : `auto`)};
  height: 100%;
  border: 1px solid black;
  background-color: ${colors.primary};
  padding-left: 5px;
`;

export const Teste = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageControlContainer = styled.div`
  display: flex;
`;

export const PreviousPage = styled.div``;

export const PageControl = styled.div``;

export const NextPage = styled.div``;
