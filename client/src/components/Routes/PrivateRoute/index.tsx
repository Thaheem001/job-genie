import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import ScreenLoader from "../../shared/ScreenLoader";
import { validateAuthCookie } from "../../utils/validateAuthCookie";

type Props = {};

const PrivateRoute = (props: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const userLoginState = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    validateAuthCookie()
      .then((isValid) => {
        if (!userLoginState) {
          if (!isValid) {
            throw new Error("Tokken Expired!");
          }
        }
        dispatch({ type: 'user_verify', payload: true });
        setLoading(false);
        toast.success("Login SuccessFul");
      })
      .catch((error: string) => {
        dispatch({ type: 'user_verify_false', payload: false });
        toast.error(error.toString());
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
