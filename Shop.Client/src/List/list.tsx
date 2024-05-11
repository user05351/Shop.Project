import React, { useEffect } from "react";
import styled from "styled-components";
import Filter from "../Filter/filter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../main";
import { Link } from "react-router-dom";
import { ProductList } from "../ProductList/productList";
import Loader from "../Loader/loader";
import placeholder from "../images/product-placeholder.png";
import { getProducts } from "../queries";
import { IProduct, IProductList } from "../redux/types";
import { setProducts, showLoadingList } from "../redux/slices";

const StyledList = styled.div`
  & > p {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.9);
  }
  & > div {
    gap: 10px;
  }
`

interface ListProps {}

const List: React.FC<ListProps> = () => {
  const dispatch = useDispatch();

  const doSuccess = (data: IProduct[]) => {
    const productsList: IProductList[] = data.map((element) => ({
      id: element.id,
      title: element.title,
      price: element.price,
      thumbnail: element.thumbnail,
      comments: element.comments?.length,
    }));

    dispatch(setProducts(productsList));
    dispatch(showLoadingList(false));
  };

  const doError = () => {
    dispatch(setProducts([]));
    dispatch(showLoadingList(false));
  };

  useEffect(() => {
    getProducts(doSuccess, doError);
  }, []);

  const filter = useSelector((state: RootState) => state.listSlices.filter);
  const products = useSelector((state: RootState) => state.listSlices.products);
  const loading = useSelector((state: RootState) => state.listSlices.loading);

  const filteredProducts = products.filter((item) => {
    const titleCondition =
      filter.title.trim() === "" || item.title.includes(filter.title);
    const priceFromCondition =
      Number(filter.priceFrom) === 0 || item.price >= filter.priceFrom;
    const priceToCondition =
      Number(filter.priceTo) === 0 || item.price <= filter.priceTo;
    return titleCondition && priceFromCondition && priceToCondition;
  });

  const productsReactNodes = filteredProducts.map((element) => (
    <Link to={`/products/${element.id}`} key={element.id}>
      <ProductList
        key={element.id}
        title={element.title}
        price={element.price}
        comments={element.comments}
        url={!element.thumbnail ? placeholder : element.thumbnail.url}
      />
    </Link>
  ));

  const n = useSelector((state: RootState) => state.listSlices.products.length);

  return (
    <StyledList>
      <p>Список товаров ({n})</p>
      <Filter />
      <div>
        {loading && <Loader />}
        {!loading && productsReactNodes}
      </div>
    </StyledList>
  );
};

export default List;
