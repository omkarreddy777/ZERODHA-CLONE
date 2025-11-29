import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafafa" }}>
      <div className="container border-top mt-5 pt-5 pb-4">

        {/* TOP ROW */}
        <div className="row">

          {/* BRAND */}
          <div className="col-12 col-md-3 mb-4">
            <img 
              src="/images/logo.svg" 
              style={{ width: "150px" }} 
              alt="Logo" 
            />
            <p className="mt-3 text-muted">
              © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* COMPANY */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Company</p>
            <a href="">About</a><br />
            <a href="">Products</a><br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a><br />
            <a href="">Zerodha.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">Zerodha cares (CSR)</a>
          </div>

          {/* SUPPORT */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Support</p>
            <a href="">Contact</a><br />
            <a href="">Support portal</a><br />
            <a href="">Z-Connect blog</a><br />
            <a href="">List of charges</a><br />
            <a href="">Downloads & resources</a>
          </div>

          {/* ACCOUNT */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Account</p>
            <a href="">Open an account</a><br />
            <a href="">Fund transfer</a><br />
            <a href="">60 day challenge</a>
          </div>

        </div>

        {/* LEGAL TEXT */}
        <div className="mt-4 text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. CDSL Depository services through Zerodha Securities Pvt. Ltd.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all related
            documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
