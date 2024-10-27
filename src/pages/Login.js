import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "https://dashboard.ogapos.com";
  }, [navigate]);

  return null; // Render nothing
};

export default Login;
