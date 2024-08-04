import React, { useEffect, useState } from "react";
import { getCoin } from "../services/api";
import Coin from "./Coin";
import "./loader.css";
import Loader from './Loader';
import "./index.css";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);
  const serchHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="search"
        className="search-input"
        value={search}
        onChange={serchHandler}
      />
      <div>
        {coins.length ? (
          <div className="table-container">
            <table
              style={{
                margin: "auto",
              }}
            >
              <thead className="table-header">
                <tr>
                  <th className="table-cell">Image</th>
                  <th className="table-cell">Name</th>
                  <th className="table-cell">Symbol</th>
                  <th className="table-cell">Current Price</th>
                  <th className="table-cell">Market Cap Change (24h)</th>
                  <th className="table-cell">Market Cap</th>
                </tr>
              </thead>

              {searchCoin.length === 0  ? (
                <div className="no-results">No Results Found</div>

              ) : (
                searchCoin.map((coin) => <Coin key={coin.id} coin={coin} />)
              )}
            </table>
          </div>
        ) : (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Landing;
