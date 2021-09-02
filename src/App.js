import React from "react";
import styled from "styled-components";
import Header from "./component/navbar/Header";
import "bootstrap/dist/css/bootstrap.css";

import Cards from "./component/Cards";
const Div = styled.div`
  margin: 0;
  padding: 0;
  background-color: beige;
  width: 100%;
`;
function App() {
  return (
    <Div>
      <Header />
      <Cards />
    </Div>
  );
}

export default App;
