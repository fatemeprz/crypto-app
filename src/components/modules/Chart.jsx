import React, { useState } from "react";
import RenderChart from "./RenderChart";

function Chart({ chart, setChart }) {
  const [type,setType]=useState("market_caps")
  
   
 
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
      <RenderChart type={type} chart={chart}/>
    </div>
  );
}

export default Chart;
