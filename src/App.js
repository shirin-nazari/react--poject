import React from "react";
import styled from "styled-components";
import Header from "./component/navbar/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./component/Homepage";

import Aboutus from "./component/navbar/Aboutus";
import Login from "./component/navbar/Login";
import PageNotFound from "./component/navbar/PageNotFound";
const Div = styled.div`
  margin: 0;
  padding: 0;
  background-color: #cee5d0;
  width: 100%;
`;
function App() {
  return (
    <Div>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/Aboutus" component={Aboutus} />
        <Route path="/Login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Div>
  );
}

export default App;
