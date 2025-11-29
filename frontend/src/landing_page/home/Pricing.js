import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">

      <div className="row align-items-center">

        <div className="col-12 col-md-4 mb-4">
          <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        <div className="col-12 col-md-2"></div>

        <div className="col-12 col-md-6 mb-5">
          <div className="row text-center g-3">

            <div className="col-6 p-3 border rounded">
              <h1 className="mb-2">₹0</h1>
              <p className="text-muted">
                Free equity delivery & direct mutual funds
              </p>
            </div>

            <div className="col-6 p-3 border rounded">
              <h1 className="mb-2">₹20</h1>
              <p className="text-muted">Intraday & F&O</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
