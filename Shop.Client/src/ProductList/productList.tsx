import styled from "styled-components";

const StyledProductList = styled.div`
  display: inline-block;
  margin: 10px;
  width: 220px;
  height: 236px;

  & > a {
    display: block;
    color: inherit;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 600;
  }

  & > img {
    max-width: 100%;
    width: 150px;
  }

  & span {
    font-weight: 600;
  }
`

export interface productListProps {
  title: string,   
  price : number,
  comments : number,
  url:string,
}
export const ProductList = ({
  title,
  price,
  comments,
  url
}: productListProps) => {

  return (
    <StyledProductList>
      <a href="/"> {title}</a>
      <img src={url} alt={url}></img>
      <div>
        <span>Price: </span>
        {price}
      </div>
      <div>
        <span>Comments: </span>
        {comments}
      </div>
    </StyledProductList> 
  );
}
