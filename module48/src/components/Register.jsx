import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { auth } from "../firebase/firebase.config";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // console.log(`details`, email, password, terms, name, photo);

    const validatePassword = /^.{6,}$/;
    if (!validatePassword.test(password)) {
      setError("password at least 6 character!");
      return;
    }

    setError("");
    setSuccess(false);

    if (!terms) {
      setError("please checkbox. tick");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("creation of new users:", result.user);
        setSuccess(true);
        e.target.reset();

        //update profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, profile)
          .then(() => {})
          .catch();

        // send verification email
        sendEmailVerification(result.user).then(() =>
          alert(`please verify your email address`)
        );
      })
      .catch((err) => {
        console.log(`error happen at:`, err);
        setError(err.message);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Your Name"
                  />
                  <label className="label">Photo</label>
                  <input
                    type="text"
                    name="photo"
                    className="input"
                    placeholder="PhotoURL"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <button
                      onClick={handleShowPassword}
                      className=" absolute top-4 right-6"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="checkbox"
                        name="terms"
                        className="checkbox"
                      />
                      Accept Our Term and Conditions
                    </label>
                  </div>

                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                {success && (
                  <p className="text-green-500">account created successfully</p>
                )}
                {error && <p className="text-red-600">{error}</p>}
              </form>
              <p>
                Already have an Account?<Link to={"/login"}>log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
