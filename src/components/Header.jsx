import React from "react";
import { SiHiveBlockchain } from "react-icons/si";

function Header() {
  return (
    <header className="flex items-center bg-blue-900 justify-between h-16 px-6 rounded-xl">
      <ul className="flex">
        <li className="mr-6 cursor-pointer hover:font-bold">Buy Crypto</li>
        <li className="mr-6 cursor-pointer hover:font-bold">Markets</li>
        <li className="mr-6 cursor-pointer hover:font-bold">Trade</li>
        <li className="mr-6 cursor-pointer hover:font-bold">Contact</li>
      </ul>
      <div className="flex">
        <h1 className="pr-3 font-bold text-xl">Crypto App</h1>
        <SiHiveBlockchain className="text-3xl"  />
      </div>
    </header>
  );
}

export default Header;
