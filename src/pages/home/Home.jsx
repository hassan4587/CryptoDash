import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { coinContext } from "../../context/CoinContext";
function Home() {
  const { allCoins, currency } = useContext(coinContext);
  // const [displayCoinData, setDisplayCoinData] = useState([]);

  // useEffect(() => {
  //   setDisplayCoinData(allCoins);
  // }, [allCoins]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypo Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign Up to
          explore about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Search Crypto..." />
          <button type="submit">Search</button>
        </form>
        <div className="crypto-table">
          <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{ textAlign: "center" }}>24H Change</p>
            <p className="market-cap">Market Cap</p>
          </div>
          {allCoins.slice(0, 10).map((item, index) => (
            <div key={index} className="table-layout">
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>
                {" "}
                {item.current_price.toLocaleString()} {currency}
              </p>
              <p className={item.price_change_percentage_24h>0?"green":"red" }>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
              <p className="market-cap">
                {" "}
                {item.market_cap.toLocaleString()} {currency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
