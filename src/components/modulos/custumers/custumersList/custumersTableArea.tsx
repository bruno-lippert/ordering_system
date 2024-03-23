import React from "react";
import * as S from "./styles"

export default function CustomerTableArea() {
  return (
    <S.TableAreaContainer>
      <S.TableContainer>
        <S.Table>
          <S.TableHeadContainer>
            <S.TableHeadColumnDescription
              className="tableHeadColumn"
              width={65}
              style={{
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            >
              <h3>Nome</h3>
            </S.TableHeadColumnDescription>
            <S.TableHeadColumnUnitOfMeasure
              className="tableHeadColumn"
              width={35}
              style={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <h3>CPF/CNPJ</h3>
            </S.TableHeadColumnUnitOfMeasure>
          </S.TableHeadContainer>
        </S.Table>
      </S.TableContainer>
    </S.TableAreaContainer>
  );
}
