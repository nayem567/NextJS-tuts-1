import React from "react";
import NavLinks from "../components/NavLinks";
import "./styles.css";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <NavLinks />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
