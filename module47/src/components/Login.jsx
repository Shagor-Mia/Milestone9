import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [user, setUser] = useState([]);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };

  const handleLogOut = () => {
    signOut(auth).then(() => console.log("sign out successfully"));
    setUser(null);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      Please Login
      {user ? (
        <button onClick={handleLogOut} className="btn">
          Sign Out
        </button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn} className="btn">
            Sign in with Google
          </button>
          <button onClick={handleGithubSignIn} className="btn">
            Sign in with Github
          </button>
        </>
      )}
      {user && (
        <div>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
