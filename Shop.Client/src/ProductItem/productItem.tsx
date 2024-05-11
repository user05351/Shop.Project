import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../main";
import ProductImage from "../ProductImage/productImage";
import ProductComment from "../ProductComment/productComment";
import NewCommentForm from "../NewCommentForm/newCommentForm";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import { useParams } from "react-router-dom";
import Loader from "../Loader/loader";
import { IProduct, ISimilar } from "../redux/types";
import { getProduct, getSimilars } from "../queries";
import {
  setComents,
  showLoadingProduct,
  emptyProduct,
  emptySimilar,
} from "../redux/slices";
import { StyledTitle } from "../NewCommentForm/newCommentForm";
import { StyledProductComment } from "../ProductComment/productComment";
import styled from "styled-components";

const StyledProductItem = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledItemPresentation = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const StyledThumbnail = styled.div`
  width: 40%;
`

const StyledItemInfo = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;

  & > div:nth-child(1) {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.9);
    font-weight: bold;
    margin: 10px;
  }

  & > div:nth-child(2) {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.9);
    font-weight: lighter;
    margin: 10px;
  }

  & > div:nth-child(3) {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.9);
    font-weight: bold;
    margin: 10px;
  }
`

const StyledItemImage = styled.div`
  display: inline-block;
`

const StyledLine = styled.div`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid rgb(207, 213, 223);
`

const StyledSimilars = styled.div`
  display: inline-block;
  width: 100%;
`

interface ProductItemProps {}

const ProductItem: React.FC<ProductItemProps> = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const productId = params.productId;
  const [product, setProduct] = useState(emptyProduct);
  const [similars, setSimilars] = useState([emptySimilar]);

  const doSuccessProduct = (data: IProduct) => {
    setProduct(data);
    dispatch(setComents(data.comments));
    dispatch(showLoadingProduct(false));
  };

  const doErrorProduct = () => {
    dispatch(setComents([]));
    dispatch(showLoadingProduct(false));
  };

  const doSuccessSimilars = (data: ISimilar[]) => {
    setSimilars(data);
  };

  const doErrorSimilars = () => {
    setSimilars([]);
  };

  if (!productId) return;

  if (!product.id) {
    getProduct(productId, doSuccessProduct, doErrorProduct);
    getSimilars(productId, doSuccessSimilars, doErrorSimilars);
  }

  useEffect(() => {
    dispatch(setComents(product.comments));
  }, [product]);

  const loading = useSelector(
    (state: RootState) => state.productSlices.loading
  );
  const comments = useSelector(
    (state: RootState) => state.productSlices.comments
  );

  let productImagesReactNodes;
  if (!!product.images)
    productImagesReactNodes = product.images.map(
      (element) =>
        element.id !== product.thumbnail?.id && (
          <ProductImage key={element.id} src={element.url} />
        )
    );

  let productCommentsReactNodes;
  if (!!comments)
    productCommentsReactNodes = comments.map((element) => (
      <ProductComment
        key={element.id}
        name={element.name}
        body={element.body}
      />
    ));

  let productSimilarReactNodes;
  if (!!similars)
    productSimilarReactNodes = similars.map((element) => (
      <SimilarProducts
        key={element.id}
        title={element.title}
        price={element.price}
      />
    ));

  return (
    <StyledProductItem>
      {loading && <Loader />}

      {!loading && (
        <StyledItemPresentation>
          <StyledThumbnail>
            <img
              src={product.thumbnail?.url}
              alt={product.thumbnail?.url}
            ></img>
          </StyledThumbnail>
          <StyledItemInfo>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>Price: &nbsp;{product.price}</div>
          </StyledItemInfo>
        </StyledItemPresentation>
      )}

      <StyledLine></StyledLine>

      {!loading && <StyledTitle> Other photos </StyledTitle>}
      {!loading && <StyledItemImage>{productImagesReactNodes}</StyledItemImage>}

      <StyledLine></StyledLine>

      {!loading && <StyledTitle> Comments </StyledTitle>}
      {!loading && (
        <StyledProductComment>{productCommentsReactNodes}</StyledProductComment>
      )}

      <StyledLine></StyledLine>

      {!loading && (
        <NewCommentForm product={product} productComments={comments} />
      )}

      <StyledLine></StyledLine>

      {!loading && <StyledTitle> Similar Products </StyledTitle>}
      {!loading && <StyledSimilars>{productSimilarReactNodes}</StyledSimilars>}
    </StyledProductItem>
  );
};

export default ProductItem;
