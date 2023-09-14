import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavComp = styled.nav`
  margin-bottom: 16px;

  a {
    padding: 8px 14px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    &.active {
      color: #00daff;
      border: 2px solid #00daff;
    }
  }
`;

export const Nav = () => {
  return (
    <NavComp>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </NavComp>
  );
};

export default Nav;
