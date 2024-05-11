import React from "react";
import styled from "styled-components";

export const StyledProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  & > p:nth-child(1) {
    display: flex;
    justify-content: left;
    margin: 2px;
    font-weight: bold;
  }

  & > p:nth-child(2) {
    display: flex;
    justify-content: left;
    margin: 2px;
    font-weight: lighter;
  }
`

interface ProductCommentProps {
  name: string;
  body: string;
}

const ProductComment: React.FC<ProductCommentProps> = ({ name, body }) => {
  return (
    <StyledProductComment>
      <p> {name} </p>
      <p> {body} </p>
    </StyledProductComment>
  );
};

export default ProductComment;
