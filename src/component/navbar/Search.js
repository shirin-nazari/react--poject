import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card";
import Data from "../../api/Data.json";
import card from "../Card";
/* ------------------------------ styled input ------------------------------ */
const Div = styled.input`
  box-shadow: 20px;
  border-radius: 20px;
  width: 350px;
  /* height: 40px; */
`;
/* -------------------------------------------------------------------------- */
const Button = styled.button`
  /* border-radius: 5px; */
  color: white;
  text-align: center;
  width: 80px;
  height: 50px;
  background-color: #393e46;
`;
const search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setinput] = useState("");
  const handleChangeInput = (e) => {
    e.preventDefault();
    setinput(e.target.value);
    console.log(e.target.value);
  };
  if (input.length > 0) {
    Data.filter((i) => {
      return card.name.match(input);
    });
  }
  return (
    <form className="d-flex">
      <Div
        className="form-control m-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={input}
        onChange={handleChangeInput}
      />
      <Button className="btn btn-outline-success" type="submit">
        Search
      </Button>
    </form>
  );
};
export default search;
