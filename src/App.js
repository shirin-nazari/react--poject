import React from "react";
import styled from "styled-components";
import Header from "./component/navbar/Header";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./component/Card";
import Data from "./api/Data.json";
const Div = styled.div`
  margin: 0;
  padding: 0;
`;
function App() {
  return (
    <Div>
      <Header />
      <Card />
    </Div>
  );
}

export default App;
