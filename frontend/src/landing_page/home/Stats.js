import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3 p-md-5 align-items-center">

        {/* TEXT SECTION */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="fs-3 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha...
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, or annoying notifications.
          </p>

          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted">
            A complete ecosystem with 30+ fintech investments.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With tools like Nudge and Kill Switch...
          </p>
        </div>

        {/* IMAGE + LINKS */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img 
            src="/images/ecosystem.png" 
            alt="Ecosystem"
            style={{ width: "90%", maxWidth: "500px" }}
          />

          <div className="mt-4">
            <a href="" className="d-block d-md-inline mx-md-4" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>

            <a href="" className="d-block d-md-inline" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
