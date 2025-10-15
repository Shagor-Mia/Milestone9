import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        if (!result.user.emailVerified) {
          alert("email not verified!");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => alert(`please check your email`))
      .catch((err) => setError(err));
  };

  return (
    <div className="card bg-base-100 w-full m-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              ref={emailRef}
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>

        <p>
          Not Registered?please <Link to={"/register"}>Register</Link>
        </p>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
