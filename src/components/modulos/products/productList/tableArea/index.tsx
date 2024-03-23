import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import ProductTableItem from "../tableItem";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import AddProductButton from "../../menageProducts/addProduct";
import { useRouter } from "next/router";
import { ProductsContext } from "../../../../../context/ProductsContext";
import { Product } from "../../../../../types/Product";
import { setProduct } from "../../../../../redux/products/slice";

export default function ProductTableArea() {
  const {
    productDescriptionToFilter,
    idCompany,
    setIdCompany,
    products,
    setProducts,
    fetchProducts,
  } = useContext(ProductsContext)!;

  const dispatch = useDispatch();
  const router = useRouter();

  // const [products, setProducts] = useState<Product[]>([]);
  // const [idCompany, setIdCompany] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsToDisplay, setItemsToDisplay] = useState<Product[]>();
  const [totalPages, setTotalPages] = useState<number>(1);

  const itemsPerPager = 10;
  const starIndex = (currentPage - 1) * itemsPerPager;
  const endIndex = starIndex + itemsPerPager;

  useEffect(() => {
    const id = localStorage.getItem("currentIdCompany");
    if (id) {
      setIdCompany(id);
      console.log(id);
    } else {
      alert("Empresa não encontrada!");
      localStorage.clear();
      router.push("/Login");
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (idCompany) {
      fetchProducts();
    }
  }, [idCompany, productDescriptionToFilter]);

  if (products && products.length > 0) {
    setTimeout(() => {
      dispatch(setProduct(products));
      setItemsToDisplay(products.slice(starIndex, endIndex));
      setTotalPages(Math.ceil(products.length / itemsPerPager));
    }, 0);
  }

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <S.TableAreaContainer>
      <S.TableContainer>
        <S.Table>
          <S.TableHeadContainer>
            <S.TableHeadColumnDescription
              className="tableHeadColumn"
              width={60}
              style={{
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            >
              <h3>Descrição</h3>
            </S.TableHeadColumnDescription>
            <S.TableHeadColumnPrice className="tableHeadColumn" width={20}>
              <h3>Preço</h3>
            </S.TableHeadColumnPrice>
            <S.TableHeadColumnStockQuantity
              className="tableHeadColumn"
              width={10}
            >
              <h3>Em estoque</h3>
            </S.TableHeadColumnStockQuantity>
            <S.TableHeadColumnUnitOfMeasure
              className="tableHeadColumn"
              width={10}
              style={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <h3>Unid de medida</h3>
            </S.TableHeadColumnUnitOfMeasure>
          </S.TableHeadContainer>
          <ProductTableItem itemsToDisplay={itemsToDisplay ?? []} />
        </S.Table>
      </S.TableContainer>

      <S.ProductManagementPanel      >
        <AddProductButton />
        <S.PageControlContainer>
          <S.FirstPage
            onClick={goToFirstPage}
            disabled={currentPage == 1 ? true : false}
          >
            <MdArrowBackIos />
            <MdArrowBackIos />
          </S.FirstPage>

          <S.PreviousPage
            onClick={handlePreviousPage}
            disabled={currentPage == 1 ? true : false}
          >
            <MdArrowBackIos />
          </S.PreviousPage>

          <S.PageControl>
            {currentPage} de {totalPages}
          </S.PageControl>

          <S.NextPage
            onClick={handleNextPage}
            disabled={currentPage == totalPages ? true : false}
          >
            <MdArrowForwardIos />
          </S.NextPage>

          <S.LastPage
            onClick={goToLastPage}
            disabled={currentPage == totalPages ? true : false}
          >
            <MdArrowForwardIos />
            <MdArrowForwardIos />
          </S.LastPage>
        </S.PageControlContainer>
      </S.ProductManagementPanel>
    </S.TableAreaContainer>
  );
}
