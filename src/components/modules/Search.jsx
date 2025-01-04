import React, { useContext, useEffect, useReducer, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";
import SearchBox from "./SearchBox";
import { RotatingLines } from "react-loader-spinner";
import { CoinContext } from "../../Context/CoinProvider";

const initialState = {
  data: [],
  isLoading: true,
  error: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { data: action.payload, isLoading: false, error: false };

    case "FAIL":
      return { data: [], isLoading: false, error: action.payload };

    case "CLEAR":
      return { ...state, data: [] };

    case "WAIT":
      return { ...state, isLoading: true };
    default:
      throw new Error("Invalid action");
  }
};

function Search() {
  const { currency, setCurrency } = useContext(CoinContext);
  const [search, setSearch] = useState("");
  const [coins, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "CLEAR" });

    if (!search) return;
    const controller = new AbortController();
    const seachData = async () => {
      try {
        const res = await fetch(searchCoin(search), {
          signal: controller.signal,
        });
        const data = await res.json();
        if (data.coins) {
          dispatch({ type: "SUCCESS", payload: data.coins });
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch({ type: "FAIL", payload: error.message });
          // console.log("error: ",coins.error);
          alert(error.message);
        }
      }
    };
    dispatch({ type: "WAIT" });
    seachData();
    return () => {
      controller.abort();
    };
  }, [search]);
  const currencyHandler = (e) => {
    setCurrency(e.target.value);
  };
  const searchHandler = (e) => {
    const searchedCoin = e.target.value.toLowerCase().trim();
    setSearch(searchedCoin);
  };

  return (
    <>
      <div>
        <div className="text-center mt-12">
        <p className="text-blueCyan text-xl mb-5 ">Show Crypto</p>
        <p className=" text-4xl  font-semibold">Crypto Market Trade And Metrics</p>
        </div>
        <input
          className="bg-dark h-9 w-56 rounded-md pl-3 outline-none"
          type="text"
          placeholder="Search"
          onChange={searchHandler}
          value={search}
        />
        <select
          onChange={currencyHandler}
          value={currency}
          className=" ml-3 mt-24 bg-dark outline-none h-9 w-18 rounded-md pl-3"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>

      {(!!coins.length || search) && (
        <div className="w-64 h-80 bg-darkbox border p-2 rounded border-gray-700 mt-2 z-20 absolute overflow-y-auto scrollbar">
          {coins.isLoading ? (
            <div className="flex mr-auto justify-center h-full">
              {" "}
              <RotatingLines
                strokeColor="#3874ff"
                strokeWidth="2"
                width="60"
              />{" "}
            </div>
          ) : (
            <SearchBox coins={coins.data} />
          )}
        </div>
      )}
    </>
  );
}

export default Search;
