import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePageState } from "../../Context/StateProvider";

const Login = () => {
  const { setShowSignup, setShowLogin,setShowShadow } = usePageState();
  const [pass, setPass] = useState(true);
  const hidePage = () => {
    // Function to hide the page (needs implementation)
    setShowLogin(false);
    setShowShadow(false);
    document.body.style.overflowY = "scroll";
  };

  const showSignUp = () => {
    // Function to show the sign-up form (needs implementation)
    setShowLogin(false);
    setShowShadow(true);
    document.body.style.overflowY = "hidden";
    setShowSignup(true);
  };

  return (
    <section className="login d-flex align-items-center flex-column border shadow">
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

      <div className="content d-flex justify-content-between align-items-center p-5 pb-0 pt-3 w-100">
        <h3>Sign In</h3>
        <p>
          Don't have an account yet?{" "}
          <NavLink to="#" onClick={showSignUp}>
            Create new for free
          </NavLink>
        </p>
      </div>

      <div className="mobContent p-5 pb-0 w-100">
        <h3>Welcome Back</h3>
        <button className="cutBtn" onClick={hidePage}>
          X
        </button>
      </div>

      <div className="signup-form w-100 p-5 pt-5 d-flex justify-content-center">
        <div className="form">
          <form className="d-flex w-100 flex-column signup-form">
            <input type="email" placeholder="Email" />
            <div className="input-group">
              <input
                type={pass ? "password" : "text"}
                placeholder="Password"
                className="conPassword"
              />
              <span
                className=" eyeBtn"
                onClick={() => {
                  console.log("clic");
                  setPass(!pass);
                }}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-eye"></i>
              </span>
            </div>

            <div className="signIn-div d-flex justify-content-between align-items-center p-0">
              <button className="btn btn-primary mt-3 form-btn signIn-btn loginBtn">
                Sign in
              </button>
              <NavLink
                to="#"
                className="nav-link mt-3 mobLink"
                onClick={showSignUp}
              >
                or, Create Account
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
                style={{ width: "22px" }}
              />{" "}
              Sign up with Google
            </button>
            <p
              style={{
                fontSize: "clamp(10px,2vw,14px)",
                textAlign: "center",
                cursor: "pointer",
                color: "gray",
                marginTop: "30px",
              }}
            >
              Forgot password?
            </p>
          </form>
        </div>
        <div>
          <img src="./images/signup.png" alt="Sign Up" className="mainImg" />
        </div>
      </div>
    </section>
  );
};

export default Login;
