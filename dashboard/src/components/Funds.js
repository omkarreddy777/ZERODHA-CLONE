import React, { useEffect, useState } from "react";
import axios from "axios";

const Funds = () => {
  const userId = localStorage.getItem("userEmail");
  const [funds, setFunds] = useState(null);
  const [amount, setAmount] = useState("");

  // Load funds
  useEffect(() => {
    axios.get(`http://localhost:3002/funds/${userId}`).then((res) => {
      setFunds(res.data);
    });
  }, [userId]);

  const addFunds = async () => {
    await axios.post("http://localhost:3002/funds/add", {
      userId,
      amount: Number(amount),
    });
    window.location.reload();
  };

  const withdrawFunds = async () => {
    await axios.post("http://localhost:3002/funds/withdraw", {
      userId,
      amount: Number(amount),
    });
    window.location.reload();
  };

  const openCommodity = async () => {
    await axios.post("http://localhost:3002/funds/open-commodity", {
      userId,
    });
    window.location.reload();
  };

  if (!funds) return <p>Loading...</p>;

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>

        <button className="btn btn-green" onClick={addFunds}>
          Add funds
        </button>

        <button className="btn btn-blue" onClick={withdrawFunds}>
          Withdraw
        </button>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginLeft: "20px", padding: "5px" }}
        />
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">
                {funds.availableMargin.toFixed(2)}
              </p>
            </div>

            <div className="data">
              <p>Used margin</p>
              <p className="imp">{funds.usedMargin.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Available cash</p>
              <p className="imp">{funds.availableCash.toFixed(2)}</p>
            </div>

            <hr />

            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance.toFixed(2)}</p>
            </div>

            <hr />
            <div className="data">
              <p>Commodity Account</p>
              <p>{funds.commodityAccount ? "Active" : "Not Active"}</p>
            </div>

            {!funds.commodityAccount && (
              <button
                className="btn btn-blue"
                onClick={openCommodity}
                style={{ marginTop: "15px" }}
              >
                Open Commodity Account
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
