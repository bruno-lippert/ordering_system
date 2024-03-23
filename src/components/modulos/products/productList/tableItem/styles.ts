import styled from "styled-components";
import { colors, fonts } from "../../../../../styles/themes/theme";

export const TableLine = styled.div``;

export const TableColumn = styled.div`
  padding: 10px;
  white-space: nowrap;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Items = styled.div<{ width?: number }>`
  display: flex;
  background-color: ${colors.primary};
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
`;

export const ItemDescription = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: ${(props) => (props.width ? `${props.width}%` : `auto`)};
  padding-left: 5px;

  @media (max-width: 500px) {
    width: 30%;
  }
`;
export const ItemPrice = styled(ItemDescription)`
  @media (max-width: 500px) {
    width: 25%;
  }
`;
export const ItemStockQuantity = styled(ItemDescription)`
  @media (max-width: 500px) {
    width: 25%;
  }
`;
export const ItemUnitOfMeasure = styled(ItemDescription)`
  @media (max-width: 500px) {
    width: 20%;
  }
`;
