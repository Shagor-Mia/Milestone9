import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AutrhContext";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold"> Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Your Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          already have an account? please{" "}
          <Link
            className="text-blue-500 hover:text-blue-700 underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
