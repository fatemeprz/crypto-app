import { createContext, useReducer } from "react";
import { useState, useEffect } from "react";
import { getCoinList } from "../services/CryptoApi";
import axios from "axios";

export const CoinContext = createContext();

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

    default:
      throw new Error("Invalid action");
  }
};

function CoinProvider({ children }) {
  const [coins, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(getCoinList(page, currency));

        dispatch({ type: "SUCCESS", payload: res.data });
        // setCoins(data);
        // setIsLoading(false);
      } catch (error) {
        dispatch({ type: "FAIL", payload: error.message });
        // console.log(error.message);
      }
    };
    getData();
  }, [page, currency]);

  return (
    <CoinContext.Provider
      value={{ coins, page, setPage, currency, setCurrency }}
    >
      {children}
    </CoinContext.Provider>
  );
}

export default CoinProvider;
