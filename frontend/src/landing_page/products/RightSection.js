import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* TEXT FIRST ON MOBILE */}
        <div className="col-12 col-md-6 p-3 order-2 order-md-1">
          <h1 className="fs-3">{productName}</h1>
          <p className="text-muted">{productDesription}</p>

          <a href={learnMore}>Learn More</a>
        </div>

        {/* IMAGE */}
        <div className="col-12 col-md-6 order-1 order-md-2 mb-4 text-center">
          <img 
            src={imageURL} 
            alt={productName}
            style={{ width: "90%", maxWidth: "450px" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
