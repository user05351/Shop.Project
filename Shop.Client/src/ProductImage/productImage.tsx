import React from "react";
import styled from "styled-components";

const StyledProductImage = styled.div`
  display: inline-block;
  padding: 10px;

  & > img {
    width: 100%;
    height: 100%;
  }
`

interface ProductImageProps {
  src: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src }) => {
  return (
    <StyledProductImage>
      <img src={src} alt={src}></img>
    </StyledProductImage>
  );
};

export default ProductImage;
