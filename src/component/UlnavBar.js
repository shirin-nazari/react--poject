import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
  padding: 28px;
  list-style-type: none;
  /* background-color: beige; */
`;
const Div = styled.div``;

const navbar = () => {
  return (
    <Div>
      <Ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/">ConcatUs</NavLink>
        </li>
        <li>
          <Search />
        </li>
      </Ul>
    </Div>
  );
};
export default navbar;
