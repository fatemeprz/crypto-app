import { useContext } from "react";
import TableRow from "./TableRow";
import { RotatingLines } from "react-loader-spinner";
import { CoinContext } from "../../Context/CoinProvider";

function TableCoin({ setChart, chart, coinData, setCoinData }) {
  const { coins } = useContext(CoinContext);
  return (
    <>
      <div>
        {coins.isLoading ? (
          <div className="flex mr-auto justify-center h-screen  ">
            <RotatingLines strokeColor="#3874ff" strokeWidth="2" width="60" />
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
              {coins.data.map((coin) => (
                <TableRow
                  key={coin.id}
                  coin={coin}
                  setChart={setChart}
                  chart={chart}
                  coinData={coinData}
                  setCoinData={setCoinData}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default TableCoin;
