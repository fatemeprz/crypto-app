import { SiHiveBlockchain } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { GrPhone } from "react-icons/gr";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className=" bg-blue-900 px-6">
      <div className="max-w-normal  flex flex-grow basis-0 flex-wrap m-auto gap-8 py-9 justify-between">
        <div className="sm:w-72">
          <div className="flex">
            <SiHiveBlockchain className="text-3xl  mr-3" />
            <span className="font-serif font-bold text-xl ">Crypto App</span>
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
          <li className="font-semibold text-lg mb-6">Contact</li>
          <li className="flex items-center cursor-pointer hover:underline mt-2 mb-3">
            <span>
              <GrPhone className="text-2xl mr-2" />
            </span>
            <span>(205)555-0100</span>
          </li>
          <li className="flex items-center cursor-pointer hover:underline  my-3">
            <span>
              <CiClock2 className="text-2xl mr-2" />
            </span>
            <span>Mon-Fri: 9 am - 17 pm</span>
          </li>
          <li className="flex items-center cursor-pointer  hover:underline my-3">
            <span>
              <AiOutlineMail className="text-2xl mr-2" />
            </span>
            <span>Email@Coinapp.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
