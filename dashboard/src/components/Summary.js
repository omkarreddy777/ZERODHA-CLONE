import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [livePrices, setLivePrices] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch holdings once
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setHoldings(res.data);
      setLoading(false);
    });
  }, []);

  // Fetch live stock prices every 5 seconds
  useEffect(() => {
    if (holdings.length === 0) return;

    const fetchLivePrices = async () => {
      const prices = {};

      await Promise.all(
        holdings.map(async (item) => {
          try {
            const res = await axios.get(
              `http://localhost:3002/price/${item.name}`
            );
            prices[item.name] = res.data.price
              ? Number(res.data.price)
              : item.price;
          } catch (err) {
            prices[item.name] = item.price;
          }
        })
      );

      setLivePrices(prices);
    };

    fetchLivePrices();

    const interval = setInterval(fetchLivePrices, 5000);

    return () => clearInterval(interval);
  }, [holdings]);

  if (loading) return <h3 style={{ padding: "20px" }}>Loading summary...</h3>;

  // Calculations based on live prices
  const totalInvestment = holdings.reduce(
    (sum, h) => sum + h.avg * h.qty,
    0
  );

  const currentValue = holdings.reduce(
    (sum, h) => sum + (livePrices[h.name] || h.price) * h.qty,
    0
  );

  const totalPnL = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0 ? ((totalPnL / totalInvestment) * 100).toFixed(2) : 0;

  const isProfit = totalPnL >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/* EQUITY SECTION */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* HOLDINGS SUMMARY (REAL-TIME) */}
      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {totalPnL.toFixed(2)}{" "}
              <small>
                {isProfit ? "+" : ""}
                {pnlPercent}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Investment <span>{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
