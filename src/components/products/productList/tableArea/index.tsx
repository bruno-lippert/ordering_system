import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../../../types/Product";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import ProductTableItem from "../tableItem";
import { getProductsByIDCompany } from "../../../../services/productsManagement";
import { setProduct } from "../../../../redux/products/slice";
import { ProductsContext } from "../../../../context/ProductsContext";
import SaveProductButton from "../../menageProducts/addProduct";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";



export default function ProductTableArea() {
  const { productDescriptionToFilter } = useContext(ProductsContext);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [idCompany, setIdCompany] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsToDisplay, setItemsToDisplay] = useState<Product[]>();
  const [totalPages, setTotalPages] = useState<number>();

  const itemsPerPager = 10;
  const starIndex = (currentPage - 1) * itemsPerPager;
  const endIndex = starIndex + itemsPerPager;

  useEffect(() => {
    //localStorage.setItem("", "46");
    setIdCompany(localStorage.getItem("currentIdCompany"));
    fetchProducts();
  }, [products, productDescriptionToFilter]);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getProductsByIDCompany(idCompany);

      // Se houver uma descrição, filtre os produtos com base nela
      const filteredProducts = productDescriptionToFilter
        ? fetchedProducts.filter((product) =>
            product.description
              .toLowerCase()
              .includes(productDescriptionToFilter.toLowerCase())
          )
        : fetchedProducts;

      setProducts(filteredProducts);
    } catch {
      setProducts([]);
    }
  };

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

  return (
    <S.TableAreaContainer>
      <S.Table>
        <S.TableHeadContainer>
          <S.TableHeadColumn
            width={45}
            style={{
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            <h3>Descrição</h3>
          </S.TableHeadColumn>
          <S.TableHeadColumn width={25}>
            <h3>Preço</h3>
          </S.TableHeadColumn>
          <S.TableHeadColumn width={15}>
            <h3>Em estoque</h3>
          </S.TableHeadColumn>
          <S.TableHeadColumn
            width={15}
            style={{
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <h3>Unid de medida</h3>
          </S.TableHeadColumn>
        </S.TableHeadContainer>
        <ProductTableItem itemsToDisplay={itemsToDisplay} />

        <div style={{
          display: "flex",
          flexDirection:"row",
          justifyContent: "space-between",
          width: "100%"
        }}>
          <SaveProductButton />
          <S.PageControlContainer>
            <S.PreviousPage onClick={handlePreviousPage}>
              <MdArrowBackIos />
            </S.PreviousPage>
            <S.PageControl>
              {currentPage} de {totalPages}
            </S.PageControl>
            <S.NextPage onClick={handleNextPage}>
              <MdArrowForwardIos />
            </S.NextPage>
          </S.PageControlContainer>
        </div>
      </S.Table>
    </S.TableAreaContainer>
  );
}
