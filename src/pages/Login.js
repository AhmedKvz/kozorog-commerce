import React, { useState } from "react";
import "../styles/Login.css";
import Transparent from "../images/Transparent.png";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      console.log(user);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img className="login__logo" src={Transparent} alt="transparent.jpg" />
      </Link>
      <div className="login__form">
        <h1>Sign-in</h1>
        <form className="signIn__form">
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="...enter your email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="...enter your password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <div className="btn__wrapper">
            <button type="submit" onClick={signIn} className="login_signIn_btn">
              Sign-in
            </button>

            <div className="register__form">
              <h5>Don't have an account?</h5>
              <h5>E-mail</h5>
              <input
                type="text"
                placeholder="register your email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <h5>Password</h5>
              <input
                type="password"
                placeholder="...enter your password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={register}
              className="login_register_btn"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
