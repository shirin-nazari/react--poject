import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* margin: 0px; */
  /* padding: 28px; */
  list-style-type: none;

  width: 400px;
  /* background-color: beige; */
`;
const Li = styled.li`
  color: #f4eee8;
  text-decoration: none;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0%;
  padding: 30px;
  width: auto;
`;

const navbar = () => {
  return (
    <Div>
      <Ul>
        <Li>
          <NavLink to="/">Home</NavLink>
        </Li>
        <Li>
          <NavLink to="/">AboutUs</NavLink>
        </Li>
        <Li>
          <NavLink to="/">ConcatUs</NavLink>
        </Li>
      </Ul>

      <Search />
    </Div>
  );
};
export default navbar;
