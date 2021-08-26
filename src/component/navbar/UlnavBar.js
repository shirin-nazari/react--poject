import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
import Aboutus from "./Aboutus";
import Login from "./Login";
import card from "../Card";
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  list-style-type: none;
  padding: 5px;
  width: 400px;
  /* background-color: beige; */
`;
const navlink = styled(NavLink)`
  color: #0a0a0a;
  text-decoration: none;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0%;
  padding: 20px;
  width: auto;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
`;
const navbar = () => {
  return (
    <Div>
      <Img
        src="https://s4.uupload.ir/files/—pngtree—tv-icon-logo-vector-illustration_4341986_owmx.png"
        alt="Logo"
      />

      <Ul>
        <li>
          <NavLink to="/" activeClassName="selected" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Aboutus" activeClassName="selected">
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" activeClassName="selected">
            Login
          </NavLink>
        </li>
      </Ul>
      {/* <Route path='/' component={}></Route>
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/Login" component={Login} /> */}
      <Search />
    </Div>
  );
};
export default navbar;
