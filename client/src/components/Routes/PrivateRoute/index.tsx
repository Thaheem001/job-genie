import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ScreenLoader from "../../shared/ScreenLoader";
import { validateAuthCookie } from "../../utils/validateAuthCookie";

type Props = {};

const PrivateRoute = (props: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    validateAuthCookie()
      .then((isValid) => {
        if (!isValid) {
          throw new Error("Tokken Expired!");
        }
        setLoading(false);
        alert("Login SuccessFul");
      })
      .catch((error: string) => {
        alert(error);
        navigate("/login");
      });
  }, []);

  return (
    <>
      <ScreenLoader isVisible={loading} />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
