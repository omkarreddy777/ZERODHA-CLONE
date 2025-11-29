import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* IMAGE */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img 
            src="/images/largestBroker.svg" 
            alt="Largest Broker"
            style={{ width: "80%", maxWidth: "350px" }}
          />
        </div>

        {/* TEXT */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="mb-4 fs-3">Largest stock broker in India</h1>

          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          <img 
            src="/images/pressLogos.png" 
            alt="Press Logos" 
            style={{ width: "90%", marginTop: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
