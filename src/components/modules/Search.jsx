import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";
import SearchBox from "./SearchBox";
import { RotatingLines } from 'react-loader-spinner'

function Search({ currency, setCurrency }) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading,setISLoading]=useState(false)
  useEffect(() => {
    setCoins([])
    if (!search) return;
    const controller = new AbortController();
    const seachData = async () => {
      try{
        const res = await fetch(searchCoin(search), {
          signal: controller.signal,
        });
        const data = await res.json();
        if (data.coins) {
          setCoins(data.coins);
          setISLoading(false)

        }
      }catch(error){
        if(error.name!=="AbortError") alert(error.message)
         
      }
    };
    setISLoading(true)
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
        className=" ml-3 mt-32 bg-dark outline-none h-9 w-18 rounded-md pl-3"
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
   
     { (!!coins.length || search) &&  (<div className="w-64 h-80 bg-darkbox border p-2 rounded border-gray-700 mt-2 z-20 absolute overflow-y-auto scrollbar">
        
        {isLoading ?  (<div className="flex mr-auto justify-center h-full"> <RotatingLines strokeColor="#3874ff" strokeWidth="2" width="60"/> </div>) : (<SearchBox coins={coins}/>) }
     </div>)
    }
  
   
    </>
  )
}

export default Search;
