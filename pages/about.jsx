import { Button } from "@material-ui/core";
import Router from "next/router";
import { useEffect } from "react";

const About= () => {
    
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/");
    }
  });
  const logout = () => {
    localStorage.removeItem("token");
    Router.push("/logindemo");
  };
  return (
    <Button onClick={logout} variant="outlined">
      Logout
    </Button>
  );
};

export default About;
