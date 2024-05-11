import React from "react";
import styled from "styled-components";
import icon from "../images/loader.webp";

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;

  & > img {
    width: 120px;
    height: 120px;
  }
`

const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <img src={icon} alt="loader image" />
    </StyledLoader>
  );
};

export default Loader;
