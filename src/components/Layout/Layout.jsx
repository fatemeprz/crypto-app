import React from 'react'
import { SiHiveBlockchain } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

function Layout({children}) {
  return (
    <>
    <header className="flex items-center  justify-between h-16 px-6 rounded-xl">
    <div className="flex">
      <SiHiveBlockchain className="text-3xl text-bluePrimary mr-3"  />
      <h1 className="font-bold text-lg text-bluePrimary ">Crypto App</h1>
    </div>
    <ul className="flex">
    <li className="menu-list-selected">Home</li>
      <li className="menu-list-notselected">Buy Crypto</li>
      <li className="menu-list-notselected">Markets</li>
      <li className="menu-list-notselected">Trade</li>
      <li className="menu-list-notselected">Contact</li>
    </ul>
    <button className='bg-bluePrimary hover:bg-blue-700 hover:duration-150 px-4 py-2.5 rounded-md font-semibold' type="button">Download App</button>
  </header>
    <div className='min-h-screen'>
    {children}
    </div>
  <footer className='bg-blue-900 text-center h-16 px-6 rounded-xl flex items-center justify-center mt-10'>
    <p className='mr-2'>Made with </p>
    <FaHeart />
  </footer>
  </>
  )
}

export default Layout