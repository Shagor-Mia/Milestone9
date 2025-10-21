import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AutrhContext";

const Home = () => {
  const user = use(AuthContext);
  console.log(user);
  return <div>Home</div>;
};

export default Home;
