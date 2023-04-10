import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  Alert } from "react-bootstrap";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import "./Login.css";

function Login() {

  
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
    else {
      // navigate("/login")
    }
  });

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    localStorage.setItem("login", true);
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="login-div">
      <div className="art-png">
        <img alt="illustator" src="./illustration1.svg"></img>
      </div>
      <div className="login-box">
        <div className="p-4 box">
          <h2 className="mb-3">Login To YoPo</h2>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <InputControl
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
          />
          <InputControl
            label="Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
          />

          <div className="footer">
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Login
            </button>
            <div className="p-4 box mt-3 text-center">
              Don't have an account? <Link to="/signup" className="signup-btn">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
