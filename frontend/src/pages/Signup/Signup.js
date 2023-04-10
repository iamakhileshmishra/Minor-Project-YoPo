import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Alert } from "react-bootstrap";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    localStorage.setItem('login', true);
    localStorage.setItem('user-info',values.name);
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="signup-div">
      <div className="art-png">
        <img alt="illustator" src="./illustration1.svg"></img>
      </div>
      <div className="login-box">
        <div className="p-4 box">
          <h2 className="mb-3">SignUp To YoPo</h2>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <InputControl
            label="Name"
            placeholder="Enter your name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Enter email address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Password"
            placeholder="Enter password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <div className="footer">
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Signup
            </button>
            <div className="p-4 box mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="login-btn">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
