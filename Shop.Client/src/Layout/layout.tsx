import React from "react";
import List from "../List/list";
import ProductItem from "../ProductItem/productItem";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/header";
import StartPage from "../StartPage/StartPage";

const StyledLayout = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);

  & > div {
    min-height: 100vh;
    min-width: 100vw;
    background-color: #f1f1f1;
    padding: 3rem;
    text-align: center;
  }
`

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <StyledLayout>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path={"/products/:productId"} element={<ProductItem />} />
          <Route path={"/products"} element={<List />} />
        </Routes>
      </div>
    </StyledLayout>
  );
};

export default Layout;
