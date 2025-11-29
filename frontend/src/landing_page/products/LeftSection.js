import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-12 col-md-6 mb-4 text-center">
          <img 
            src={imageURL} 
            alt={productName}
            style={{ width: "90%", maxWidth: "450px" }}
          />
        </div>

        {/* TEXT */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3">{productName}</h1>
          <p className="text-muted">{productDesription}</p>

          <div className="mt-3">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "30px" }}>
              Learn More
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ width: "140px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                alt="App Store"
                style={{ marginLeft: "30px", width: "140px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
