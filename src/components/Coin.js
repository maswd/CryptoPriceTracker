import React from "react";
import "./index.css";

const Coin = ({ coin }) => {
  return (
    
      <tbody>
        <tr className="table-row" key={coin.id}>
          <td className="table-cell">
            <img src={coin.image} alt={coin.name} />
          </td>
          <td className="table-cell">{coin.name}</td>
          <td className="table-cell">{coin.symbol.toUpperCase()}</td>
          <td className="table-cell">{coin.current_price}</td>
          <td
            className={`table-cell percent-change ${
              coin.market_cap_change_percentage_24h >= 0
                ? "positive"
                : "negative"
            }`}
          >
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </td>
          <td className="table-cell">{coin.market_cap.toLocaleString()}</td>
        </tr>
      </tbody>
  );
};

export default Coin;
