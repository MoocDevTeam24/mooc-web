import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { login, logout } from "../../store/reducer/authSlice";
import getRequest from "../../request/getRequest";

export default function NeedAuth(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await getRequest("/auth/me");
      if (res.status === 1) {
        dispatch(login({ user: res.data }));
      } else {
        dispatch(logout());
      }
    };

    checkAuth();
  }, [dispatch]);

  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  return auth.IsAuth ? (
    props.children
  ) : (
    <Navigate to={"/login"} replace state={{ preLocation: location }} />
  );
}
