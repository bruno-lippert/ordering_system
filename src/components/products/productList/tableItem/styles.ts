import styled from "styled-components";
import { colors, fonts } from "../../../../styles/themes/theme";

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
  height: 30px;
`;

export const ItemsProperty = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: ${(props) => (props.width ? `${props.width}%` : `auto`)};
  padding-left: 5px;
`;
