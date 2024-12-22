import React, { useEffect, useState } from "react";
import Search from "../modules/Search";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";
import Chart from "../modules/Chart";
import Banner from "../modules/Banner";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const data = await res.json();
        setCoins(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [page, currency]);

  return (
    <>
      <Banner/>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        chart={chart}
        setChart={setChart}
        coinData={coinData}
        setCoinData={setCoinData}
      />
      <Pagination setPage={setPage} page={page} />
      {chart && (
        <Chart
          chart={chart}
          setChart={setChart}
          coinData={coinData}
          setCoinData={setCoinData}
        />
      )}
    </>
  );
}

export default HomePage;
