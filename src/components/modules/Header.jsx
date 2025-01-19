import { SiHiveBlockchain } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Header() {
  const [isShow, setIsShow] = useState(false);


  return (
    <header>
      <nav className="flex items-center justify-between h-16 rounded-xl">
        <div className={`${isShow ? "hidden md:flex" : "flex items-center"}`}>
          <SiHiveBlockchain className="md:text-3xl text-xl text-bluePrimary mr-3" />
          <span className="font-serif font-bold text-lg lg:text-xl text-bluePrimary ">
            Crypto App
          </span>
        </div>
        <span
          className={`${
            isShow ? "hidden" : "block "
          } lg:hidden text-3xl cursor-pointer`}
          onClick={() => {
            setIsShow((isShow) => !isShow);
            
          }}
        >
          <RxHamburgerMenu />
        </span>
        <ul className="lg:flex hidden">
          <li className="menu-list-selected">Home</li>
          <li className="menu-list-notselected">Buy Crypto</li>
          <li className="menu-list-notselected">Markets</li>
          <li className="menu-list-notselected">Trade</li>
          <li className="menu-list-notselected">Contact</li>
        </ul>
        <button
          className="lg:block hidden bg-bluePrimary hover:bg-blue-700 hover:duration-150 px-7 py-2 rounded-md "
          type="button"
        >
          Sign Up
        </button>
      </nav>
      <div
        className={`${
          isShow
            ? "fixed z-30 transform mt-0 top-0 right-0 transition w-2/3 md:w-96 h-screen duration-150 ease-in animate-bounce-right"
            : "hidden"
        }
         bg-bluePrimary p-5`}
      >
        <span
          onClick={() => {
            setIsShow(false);
            
          }}
          className="text-left cursor-pointer font-semibold px-1.5 py-0.5 rounded-lg bg-white text-bluePrimary inline-block"
        >
          X
        </span>

        <ul className=" text-right mt-14">
          <li className="my-3 mx-6 cursor-pointer hover:underline duration-200">
            Home
          </li>
          <li className="my-3 mx-6 cursor-pointer hover:underline duration-200">
            Buy Crypto
          </li>
          <li className="my-3 mx-6 cursor-pointer hover:underline duration-200">
            Markets
          </li>
          <li className="my-3 mx-6 cursor-pointer hover:underline duration-200">
            Trade
          </li>
          <li className="my-3 mx-6 cursor-pointer hover:underline duration-200">
            Contact
          </li>
          <li className="my-3 mx-6 cursor-pointer hover:underline duration-200 mt-4 bg-white inline-block text-bluePrimary px-5 py-2 rounded-xl text-sm font-semibold">
            Sign Up
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
