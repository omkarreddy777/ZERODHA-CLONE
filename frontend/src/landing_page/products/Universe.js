import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">

      <div className="text-center">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* PARTNER GRID */}
      <div className="row text-center mt-4 g-4">

        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div className="col-12 col-sm-6 col-md-4 p-3" key={index}>
            <img 
              src="/images/smallcaseLogo.png" 
              alt="Partner Logo"
              style={{ width: "100%", maxWidth: "160px" }}
            />
            <p className="text-muted mt-2">Thematic investment platform</p>
          </div>
        ))}

        <div className="text-center mt-4">
          <Link
            to="/signup"
            className="btn btn-primary fs-5 py-2"
            style={{ width: "200px" }}
          >
            Signup Now
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Universe;
