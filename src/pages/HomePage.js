import React from "react";
import Header from "../components/Header";
import PostPage from "./PostPage";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { usePageState } from "../Context/StateProvider";

const HomePage = () => {
  const { showLogin, showSignup,showShadow } = usePageState();
  return (
    <div style={{background:showShadow?" linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1))":""}}>
      <Header />
      <PostPage />
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </div>
  );
};

export default HomePage;
