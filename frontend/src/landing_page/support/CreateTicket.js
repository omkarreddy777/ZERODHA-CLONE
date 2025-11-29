import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 p-md-5 mt-4 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/** MAP SAME STRUCTURE 6 TIMES LIKE YOUR ORIGINAL CODE **/}
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div className="col-12 col-md-4 p-3 ticket-column" key={index}>
            <h4>
              <i className="fa fa-plus-circle"></i> Account Opening
            </h4>

            <a href="">Online Account Opening</a>
            <br />
            <a href="">Offline Account Opening</a>
            <br />
            <a href="">Company, Partnership and HUF Account</a>
            <br />
            <a href="">Opening</a>
            <br />
            <a href="">NRI Account Opening</a>
            <br />
            <a href="">Charges at Zerodha</a>
            <br />
            <a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
            <br />
            <a href="">Getting Started</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
