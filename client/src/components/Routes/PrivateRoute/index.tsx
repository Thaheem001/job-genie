import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import ScreenLoader from "../../shared/ScreenLoader";
import { validateAuthCookie } from "../../utils/validateAuthCookie";

type Props = {};

const PrivateRoute = (props: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogedIn, setIsLogedIn] = useState<boolean>(false);

  useEffect(() => {
    validateAuthCookie()
      .then((isValid) => {
        if (!isValid) {
          throw new Error("Tokken Expired!");
        }
        setLoading(false);
        setIsLogedIn(true);
        toast.success("Login SuccessFul");
      })
      .catch((error: string) => {
        toast.error(error.toString());
        setIsLogedIn(false);
        navigate("/login");
      });
  }, []);

  return (
    <>
      <ScreenLoader isVisible={loading} />
      {isLogedIn && <Outlet />}

    </>
  );
};

export default PrivateRoute;
