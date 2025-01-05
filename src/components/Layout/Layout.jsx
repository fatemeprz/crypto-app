import { SiHiveBlockchain } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { GrPhone } from "react-icons/gr";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

function Layout({ children }) {
  return (
    <>
      <div className="max-w-normal m-auto  p-3">
        <header className="flex items-center  justify-between h-16 px-6 rounded-xl">
          <div className="flex">
            <SiHiveBlockchain className="text-3xl text-bluePrimary mr-3" />
            <span className="font-serif font-bold text-xl text-bluePrimary ">
              Crypto App
            </span>
          </div>
          <ul className="flex">
            <li className="menu-list-selected">Home</li>
            <li className="menu-list-notselected">Buy Crypto</li>
            <li className="menu-list-notselected">Markets</li>
            <li className="menu-list-notselected">Trade</li>
            <li className="menu-list-notselected">Contact</li>
          </ul>
          <button
            className="bg-bluePrimary hover:bg-blue-700 hover:duration-150 px-7 py-2 rounded-md "
            type="button"
          >
            Sign Up
          </button>
        </header>
        <div className="min-h-screen">{children}</div>
      </div>
      <footer className=" bg-blue-900 h-64 px-6">
        <div className="max-w-normal m-auto flex py-5 justify-between">
          <div className="w-72">
            <div className="flex">
              <SiHiveBlockchain className="text-3xl  mr-3" />
              <span className="font-serif font-bold text-xl ">
                Crypto App
              </span>
            </div>
            <p className="text-orange-100 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              beatae nam vel quasi repellendus maiores nemo nesciunt doloribus.
              Natus, distinctio.
            </p>
            <div className="flex">
              <SlSocialFacebook className="text-2xl mr-8 mt-5 bg-white text-blueCyan rounded-full p-2 w-11 h-11 hover:bg-blueCyan hover:text-white hover:transition  duration-300" />
              <SlSocialTwitter className="text-2xl mr-8 mt-5 bg-white text-blueCyan rounded-full p-2 w-11 h-11 hover:bg-blueCyan hover:text-white hover:transition  duration-300" />
              <SlSocialYoutube className="text-2xl mr-8 mt-5 bg-white text-blueCyan rounded-full p-2 w-11 h-11 hover:bg-blueCyan hover:text-white hover:transition  duration-300" />
            </div>
          </div>
          <ul>
            <li className="font-semibold text-lg mb-6">Our Ptoducts</li>
            <li className="my-2 cursor-pointer hover:underline">Crypto Earn</li>
            <li className="my-2 cursor-pointer hover:underline">Exchanges</li>
            <li className="my-2 cursor-pointer hover:underline">Defi Wallet</li>
            <li className="my-2 cursor-pointer hover:underline">Converter</li>
          </ul>
          <ul>
            <li className="font-semibold text-lg mb-6">Pages</li>
            <li className="my-2 cursor-pointer hover:underline">About Us</li>
            <li className="my-2 cursor-pointer hover:underline">Our app</li>
            <li className="my-2 cursor-pointer hover:underline">Careers</li>
            <li className="my-2 cursor-pointer hover:underline">Taken Safe</li>
          </ul>
          <ul>
            <li className="font-semibold text-lg mb-6 my-2">Contact</li>
            <li className="flex items-center cursor-pointer hover:underline  my-2"><span><GrPhone className="text-2xl mr-2" /></span><span>(205)555-0100</span></li>
            <li className="flex items-center cursor-pointer hover:underline  my-2"><span><CiClock2 className="text-2xl mr-2" /></span><span>Mon-Fri: 9 am - 17 pm</span></li>
            <li className="flex items-center cursor-pointer  hover:underline my-2"><span><AiOutlineMail className="text-2xl mr-2" /></span><span>Email@Coinapp.com</span></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Layout;
