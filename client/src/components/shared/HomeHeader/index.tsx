import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";

const HeaderHompage = () => {
  return (
    <header className="hompage-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logoBox">
            <Link to="/">
              <img src="/Img/logo.webp" alt="" />
            </Link>
          </div>
          <div className="btnBox">
            <PrimaryButton to="/login" outline={true} value="Sign In" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHompage;
