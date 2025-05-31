import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/Auth";

type NavbarContainerProps = {
  children: React.ReactElement;
};

const NavbarContainer = (props: NavbarContainerProps) => {
  const navigate = useNavigate();

  return (
    <nav>
      <span>LOGO</span>
      {props.children}
      <span onClick={() => navigate("/profile")}>profile</span>
    </nav>
  );
};

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const getNavbar = (): React.ReactElement => {
    if (!authContext.authenticated) {
      return <div></div>;
    }

    if (authContext.isAdmin) {
      return (
        <NavbarContainer>
          <div>admin</div>
        </NavbarContainer>
      );
    }

    return (
      <NavbarContainer>
        <div>user</div>
      </NavbarContainer>
    );
  };

  return getNavbar();
};

export default Navbar;
