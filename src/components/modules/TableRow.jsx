import React from "react";
import ShortNumber from "../../helper/ShortNumber";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import currencySymbol from "../../helper/CurrencySymbol";
import { marketChart } from "../../services/CryptoApi";


function TableRow({
  coin: {
    id,
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  },
  currency,
  setChart,
  chart,
}) {
  const chartHandler=async()=>{
    try{

      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart(json)
    }catch(error){
      setChart(error)
    }
    
  }
  return (
    <>
      <tr className="border-b border-dark">
        <td onClick={chartHandler} className="flex my-5 items-center">
          <img className="h-5 mr-2" src={image} alt="coin-image" />
          <span className="cursor-pointer text-darkName font-semibold text-medium">
            {symbol.toUpperCase()}
          </span>
        </td>
        <td >{name}</td>
        <td>{`${currencySymbol(
          currency
        )} ${current_price.toLocaleString()}`}</td>
        <td className={price_change > 0 ? "text-green-600" : "text-red-600"}>
          {ShortNumber(price_change)}%
        </td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
          <img src={price_change > 0 ? chartUp : chartDown} />
        </td>
      </tr>
    </>
  );
}

export default TableRow;
