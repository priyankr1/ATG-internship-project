import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePageState } from "../../Context/StateProvider";
const Signup = () => {
  const { setShowSignup, setShowLogin,setShowShadow  } = usePageState();
  const [pass,setPass]=useState(true);

  const hidePage = () => {
    // Function to hide the page (needs implementation)
    setShowSignup(false);
    setShowShadow(false);
    document.body.style.overflowY = "scroll";
    
  };

  const showLogin = () => {
    // Function to show the login form (needs implementation)
    setShowSignup(false);
    setShowShadow(true);
    document.body.style.overflowY = "hidden";
    setShowLogin(true);
  };

  return (
    <section className="signup d-flex align-items-center flex-column border shadow pb-3">
      <div className="head d-flex justify-content-center">
        <p>
          <b>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </b>
        </p>
        <button className="btn" onClick={hidePage}>
          X
        </button>
      </div>

      <div className="content d-flex justify-content-between align-items-center p-5 pb-0 w-100">
        <h4>
          <b>Create Account</b>
        </h4>
        <p>
          Already have an account?{" "}
          <NavLink to={"/"} onClick={showLogin}>
            Sign In
          </NavLink>{" "}
        </p>
      </div>

      <div className="mobContent p-5 pb-0 w-100">
        <h3>Create Account</h3>
        <button className="cutBtn" onClick={hidePage}>
          X
        </button>
      </div>

      <div className="signup-form p-0 pt-2 d-flex justify-content-between">
        <div className="form">
          <form className="d-flex flex-column signup-form">
            <div className="forName d-flex">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" className="lastName" />
            </div>
            <input type="email" placeholder="Email" />
            <div className="input-group">
              <input
                type={pass?"password":"text"}
                placeholder="Password"
                className="conPassword"
              />
              <span className=" eyeBtn" onClick={()=>{console.log("clic");setPass(!pass)}} style={{cursor:"pointer"}}>
                <i className="bi bi-eye"></i>
              </span>
            </div>  
            <input
              type="password"
              placeholder="Confirm Password"
              className="conPassword"
            />
            <div className="signIn-div d-flex justify-content-between align-items-center p-0">
              <button className="btn btn-primary mt-3 form-btn signIn-btn">
                Create Account
              </button>
              <NavLink
                to="#"
                className="nav-link mt-3 mobLink"
                onClick={showLogin}
              >
                or, Sign in
              </NavLink>
            </div>
            <button className="btn mt-3 form-btn border">
              <i className="bi bi-facebook icon" style={{ color: "blue" }}></i>{" "}
              Sign up with Facebook
            </button>
            <button className="btn mt-3 form-btn border">
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="google logo"
              style={{width:'22px'}}
            />{" "}
            Sign up with Google
          </button>
          </form>
        </div>
<div>
        <img src="./images/signup.png" alt="Sign Up" className="mainImg"/>
        <p
            style={{
              fontSize: "clamp(10px,2vw,12px)",
              marginTop: "30px",
              textAlign: "center",
              cursor: "pointer",
              color:"gray",
              bottom:'20px',
              right:0,
              position:"absolute"
            }}
            className="resText"
          >
            By signing up, you agree to our Terms & conditions, Privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
