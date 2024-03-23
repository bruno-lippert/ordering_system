import styled from "styled-components";
import { colors, fonts } from "../../../../styles/themes/theme"

export const TableAreaContainer = styled.section`
  padding: 5px;
`;

export const TableContainer = styled.div`
  @media (max-width: 1150px) {
    overflow-x: scroll;
  }
`;

export const Table = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 1150px) {
    width: 1150px;
  }
`;

export const TableHeadContainer = styled.div<{ width?: number }>`
  display: flex;
  margin: 10px 0;
  height: 50px;

  .tableHeadColumn {
    display: flex;
    align-items: center;
    height: 100%;
    border: 1px solid black;
    background-color: ${colors.primary};
  }
`;

export const TableHeadColumnDescription = styled.div<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}%` : `auto`)};

  @media (max-width: 500px) {
    width: 30%;
  }
`;
export const TableHeadColumnPrice = styled(TableHeadColumnDescription)`
  @media (max-width: 500px) {
    width: 25%;
  }
`;
export const TableHeadColumnStockQuantity = styled(TableHeadColumnDescription)`
  @media (max-width: 500px) {
    width: 25%;
  }
`;
export const TableHeadColumnUnitOfMeasure = styled(TableHeadColumnDescription)`
  @media (max-width: 500px) {
    width: 20%;
  }
`;

export const ProductManagementPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 0;

  @media (max-width: 390px) {
    justify-content: center;
  }
`;

export const PageControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviousPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.primary};
  border-radius: 5px;
  padding: 5px;
`;

export const PageControl = styled.div`
  @media (max-width: 290px) {
    font-size: 0.8em;
  }
`;

export const NextPage = styled(PreviousPage)``;
export const FirstPage = styled(PreviousPage)``;
export const LastPage = styled(PreviousPage)``;
