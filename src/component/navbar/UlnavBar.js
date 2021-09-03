import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
import "../App.css";
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
          <NavLink to="/" activeClassName="active" exact className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Aboutus" activeClassName="active" className="nav-link">
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" activeClassName="active" className="nav-link">
            Login
          </NavLink>
        </li>
      </Ul>

      <Search />
    </Div>
  );
};
export default navbar;
