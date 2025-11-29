import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const ctx = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    ctx.closeSellWindow();
  };

  return (
    <div className="trade-window-backdrop">
      <div className="container" id="sell-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
                min={1}
              />
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
                step="0.05"
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button className="btn btn-red" onClick={handleSellClick}>
              Sell
            </button>
            <button className="btn btn-grey" onClick={ctx.closeSellWindow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
