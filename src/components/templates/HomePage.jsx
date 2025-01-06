import React, { useContext, useEffect, useReducer, useState } from "react";
import Search from "../modules/Search";
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Chart from "../modules/Chart";
import Banner from "../modules/Banner";
import WhyUs from "../WhyUs";
import StartNow from "../modules/StartNow";

function HomePage() {
  const [chart, setChart] = useState(null);
  const [coinData, setCoinData] = useState({});

  return (
    <>
      <Banner />
      <WhyUs/>
      <Search />
      <TableCoin
        coinData={coinData}
        setCoinData={setCoinData}
        chart={chart}
        setChart={setChart}
      />
      <Pagination />
      {chart && (
        <Chart
          coinData={coinData}
          setCoinData={setCoinData}
          chart={chart}
          setChart={setChart}
        />
      )}
      <StartNow/>
    </>
  );
}

export default HomePage;
