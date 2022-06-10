import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";

const HeaderHompage = () => {
  const [headerClass, setHeaderClass] = useState<boolean>(false);
  const pathLocation = useLocation();
  document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 25) {
      setHeaderClass(true)
    } else {
      setHeaderClass(false)
    }
  })
  return (
    <header className={`hompage-header ${headerClass && 'header-active'}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logoBox">
            <Link to="/">
              <img src="/Img/logo.webp" alt="main-logo" />
            </Link>
          </div>
          {/* <div className="dashboard-heading">
            <h1 className="text-center text-light">Dashboard Heading Main</h1>
          </div> */}
          <div className="btnBox">
            {(pathLocation.pathname === '/') &&
              <PrimaryButton to="/login" outline={true} value="Sign In" />

            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHompage;
