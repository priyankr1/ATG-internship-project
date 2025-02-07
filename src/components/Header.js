import React from "react";
import logo from "../images/logo.png";
import { usePageState } from "../Context/StateProvider";
// import './Components.css';  // Ensure the correct path here

const Header = () => {
  const { setShowSignup ,setShowShadow} = usePageState();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light myNav">
        <div className="container-fluid">
          <img src={logo} alt="Logo" />
          <form className="d-flex">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="search"
                style={{
                  width: "clamp(100px,30vw,350px)",
                  outline: "none",
                  border: "none",
                  background: "#f2f2f2",
                  borderRadius: "100px",
                  padding: "10px 15px",
                  paddingLeft: "40px",
                }}
                className="nav-input"
                placeholder="Search for your favorite group in ATG"
              />
            </div>
          </form>
          <p
            className="head-link"
            onClick={() => {
              setShowSignup(true);
              document.body.style.overflowY = "hidden";
              setShowShadow(true);


            }}
          >
            Create a account.{" "}
            <span className="head-span">
              <b>It's free!</b>
            </span>{" "}
            <i className="bi bi-caret-down-fill"></i>
          </p>
        </div>
      </nav>
      <div className="home home-section">
        <div className="content">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
        <div className="resHead d-flex justify-content-between w-100">
          <button className="joinGroup">Join Group</button>
          <button
            className="btn btn-primary mobSignIn"
            onClick={() => {
              setShowSignup(true);
              document.body.style.overflowY = "hidden";
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
