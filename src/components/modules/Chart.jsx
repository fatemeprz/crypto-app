import React, { useState } from "react";
import RenderChart from "./RenderChart";

function Chart({
  chart,
  setChart,
  coinData: { image, current_price :price, name, total_volume,ath, market_cap},
  setCoinData,
}) {
  const [type, setType] = useState("market_caps");

  
  const clickHandler = (e) => {
    
    const typeButton = e.target.innerText.toLowerCase().split(" ").join("_");
    setType(typeButton);
  };

  return (
    <div className="z-50 h-screen left-0 w-full  top-0 backdrop-blur-sm flex items-center justify-center fixed">
      <span
        onClick={() => {
          setChart(null);
        }}
        className="absolute left-10 top-5 bg-red-700 px-2 py-0.5 rounded font-semibold cursor-pointer"
      >
        X
      </span>
      <div className="w-6/12 h-110 bg-nemodar border border-darkborder rounded-xl p-5">
        <div className="mb-6 flex items-center"><img className="h-9 mr-4" src={image} alt="coin-logo" /> <p className="font-semibold text-2xl">{name}</p></div>
        <RenderChart type={type} chart={chart} />
        <button
          onClick={clickHandler}
          className={
            type === "market_caps" ? "selected-chart-buttens" : "chart-buttens"
          }
          type="button"
        >
          Market Caps
        </button>
       
        <button
          onClick={clickHandler}
          className={
            type === "total_volumes"
              ? "selected-chart-buttens"
              : "chart-buttens"
          }
          type="button"
        >
          Total Volumes
        </button>
        <button
          onClick={clickHandler}
          className={
            type === "prices" ? "selected-chart-buttens" : "chart-buttens"
          }
          type="button"
        >
          Prices
        </button>
        <div className="mt-8 flex justify-between">
          <p><span className="text-bluePrimary font-bold">Price: </span><span>${price.toLocaleString()}</span></p>
          <p><span className="text-bluePrimary font-bold">ATH: </span><span>${ath.toLocaleString()}</span></p>
          <p><span className="text-bluePrimary font-bold">Market Cap: </span><span>${market_cap.toLocaleString()}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Chart;
