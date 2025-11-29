import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-4 p-md-5 mb-5">
      <div className="row text-center">

        <img
          src="/images/homeHero.png"
          alt="Hero"
          className="mb-4"
          style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
        />

        <h1 className="mt-4 fs-2 fs-md-1">Invest in everything</h1>

        <p className="mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>

        <Link
          to="/signup"
          className="btn btn-primary fs-5 py-2"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
