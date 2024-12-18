import React from "react";
import TableRow from "./TableRow";
import { RotatingLines } from "react-loader-spinner";
import Pagination from "./Pagination";

function TableCoin({ coins, isLoading, currency, setChart, chart }) {
  return (
    <>
      <div>
        {isLoading ? (
          <div className="flex mr-auto justify-center h-screen  ">
            
            <RotatingLines
              strokeColor="#3874ff"
              strokeWidth="2"
              width="60"
            />
          </div>
        ) : (
          <table className="w-full mt-16 sm:overflow-x-scroll relative sm:px-4 z-10">
            <thead>
              <tr className="border-b ">
                <th className="text-left pb-4">Coin</th>
                <th className="text-left pb-4">Name</th>
                <th className="text-left pb-4">Price</th>
                <th className="text-left pb-4">24h</th>
                <th className="text-left pb-4">Total Volume</th>
                <th> </th>
              </tr>
            </thead>

            <tbody className="w-full">
              {coins.map((coin) => (
                <TableRow key={coin.id} coin={coin} currency={currency} setChart={setChart} chart={chart} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default TableCoin;
