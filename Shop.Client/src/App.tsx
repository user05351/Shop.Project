import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/layout";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "Roboto", Arial, sans-serif;
`

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Layout />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
