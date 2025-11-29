import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4 p-md-5 mt-5 text-center border-top">

        {/* LEFT COLUMN */}
        <div className="col-12 col-md-8 p-3 text-md-start">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-3">Brokerage calculator</h3>
          </a>

          <ul
            style={{
              textAlign: "left",
              lineHeight: "1.8",
              fontSize: "14px",
            }}
            className="text-muted"
          >
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes cost ₹20 + courier charges.</li>
            <li>For NRI (non-PIS): 0.5% or ₹100 per executed order (whichever is lower).</li>
            <li>For NRI (PIS): 0.5% or ₹200 per executed order (whichever is lower).</li>
            <li>If the account is in debit, orders cost ₹40 instead of ₹20 per executed order.</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-md-4 p-3 mt-4 mt-md-0">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;
