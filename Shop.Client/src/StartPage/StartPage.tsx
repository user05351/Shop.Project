import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledStartPage = styled.div`
  & > p {
    font-size: 1.2rem;
    color: black;
  }

  & > div {
    display: inline-flex;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }
`

const StyledPrimaryButton = styled.button`
  width: 240px;
  height: 50px;
  border-radius: 50px;
  text-decoration: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  border: 0.5px solid black;
  background-color: lightskyblue;
`
const StyledSecondaryButton = styled.button`
  width: 240px;
  height: 50px;
  border-radius: 50px;
  text-decoration: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  background-color: lightsteelblue;
  border: 0.5px solid rgb(114, 115, 117);
`
interface StartPageProps {}

const StartPage: React.FC<StartPageProps> = () => {
  return (
    <StyledStartPage>
      <p>
        В базе данных находится n товаров общей стоимостью m
      </p>

      <div>
        <Link to={`/products`}>
          <StyledPrimaryButton type="button">
            Перейти к списку товаров
          </StyledPrimaryButton>
        </Link>

        <Link to={`http://localhost:3000/admin/`} target="_blank">
          <StyledSecondaryButton type="button">
            Перейти в систему администрирования
          </StyledSecondaryButton>
        </Link>
      </div>
    </StyledStartPage>
  );
};

export default StartPage;
