import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-12 col-md-6 text-center p-3">
          <img 
            src="/images/education.svg" 
            style={{ width: "70%", maxWidth: "350px" }} 
            alt="Education"
          />
        </div>

        {/* TEXT */}
        <div className="col-12 col-md-6 p-3 text-center text-md-start">
          <h1 className="mb-3 fs-3">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
