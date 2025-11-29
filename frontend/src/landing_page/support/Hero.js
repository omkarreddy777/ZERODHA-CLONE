import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      {/* TOP BAR */}
      <div className="p-4 px-md-5" id="supportWrapper">
        <h4 className="m-0">Support Portal</h4>
        <a href="" style={{ textDecoration: "none", color: "#387ed1" }}>
          Track Tickets
        </a>
      </div>

      {/* SEARCH & FEATURED SECTION */}
      <div className="row p-4 p-md-5 m-1 m-md-3">

        {/* LEFT BOX */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input placeholder="Eg. how do I activate F&O" />

          <div className="mt-2">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol style={{ paddingLeft: "18px" }}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
