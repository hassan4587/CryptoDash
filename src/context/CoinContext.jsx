import { createContext, use, useEffect, useState } from "react";

export const coinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState('usd');

  const fetchAllCoin = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-ii2ZkFSh8hCi4kfxMeBSH2th" },
      body: undefined,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setAllCoins(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = { 
    allCoins, currency, setCurrency
  };
  return <coinContext.Provider value={contextValue}>{props.children}</coinContext.Provider>;
};

export default CoinContextProvider;