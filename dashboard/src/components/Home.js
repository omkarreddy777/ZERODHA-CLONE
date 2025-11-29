import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  // Run once when Home loads on dashboard (port 3001)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const name = params.get("name");
    const email = params.get("email");
    const token = params.get("token");

    console.log("PARAMS RECEIVED:", { name, email, token });

    // If login data exists, store it
    if (name && email && token) {
      sessionStorage.setItem("userName", name);
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("token", token);

      // Clean URL after saving
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
