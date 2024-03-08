import styled from "styled-components";
import { colors } from "../../../styles/themes/theme";

export const ZipCodeLookupContainer = styled.div`
  button {
    padding: 2px;
    border-radius: 5px;
    border: none;
    background-color: ${colors.secondary};
    cursor: pointer;

    &:active {
      background-color: ${colors.tertiary};
    }
  }
`;
