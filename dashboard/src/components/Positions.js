import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  // Load initial positions from DB
  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  // Live Price Updates (every 5 sec)
  useEffect(() => {
    const updateLivePrices = async () => {
      try {
        const updated = await Promise.all(
          allPositions.map(async (pos) => {
            try {
              const res = await axios.get(
                `http://localhost:3002/price/${pos.name}`
              );

              return {
                ...pos,
                price: res.data.price ? Number(res.data.price) : pos.price,
              };
            } catch (err) {
              return pos; // fallback on API error
            }
          })
        );

        setAllPositions(updated);
      } catch (error) {
        console.log("Live update error:", error);
      }
    };

    if (allPositions.length > 0) {
      updateLivePrices(); // Initial call
      const interval = setInterval(updateLivePrices, 5000);
      return () => clearInterval(interval);
    }
  }, [allPositions]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((pos, index) => {
              const curValue = pos.price * pos.qty;
              const pnl = curValue - pos.avg * pos.qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = pos.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{pos.product}</td>
                  <td>{pos.name}</td>
                  <td>{pos.qty}</td>
                  <td>{pos.avg.toFixed(2)}</td>
                  <td>{pos.price.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{pos.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
