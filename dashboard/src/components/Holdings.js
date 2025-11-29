import React, { useEffect, useState } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [livePrices, setLivePrices] = useState({});

  // Load holdings
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  // Fetch live prices every 5 sec
  useEffect(() => {
    const fetchLivePrices = async () => {
      const updated = {};

      for (let stock of allHoldings) {
        try {
          const res = await axios.get(
            `http://localhost:3002/price/${stock.name}`
          );
          updated[stock.name] = res.data.price
            ? Number(res.data.price)
            : Number(stock.price);
        } catch (err) {
          updated[stock.name] = Number(stock.price) || 0;
        }
      }

      setLivePrices(updated);
    };

    if (allHoldings.length > 0) {
      fetchLivePrices();
      const interval = setInterval(fetchLivePrices, 5000);
      return () => clearInterval(interval);
    }
  }, [allHoldings]);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const live = Number(livePrices[stock.name] ?? stock.price ?? 0);
              const curValue = live * stock.qty;

              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{Number(stock.avg).toFixed(2)}</td>
                  <td>{live.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Holdings;
