import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-4 p-md-5 mb-5 text-center">

      <h1 className="mt-4 fs-2">Open a Zerodha account</h1>

      <p className="mt-2 mb-4 text-muted">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>

      <Link
        to="/signup"
        className="btn btn-primary fs-5 py-2"
        style={{ width: "220px" }}
      >
        Signup Now
      </Link>
    </div>
  );
}

export default OpenAccount;
