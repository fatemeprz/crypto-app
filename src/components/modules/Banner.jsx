import React from "react";

function Banner() {
  return (
    <div className="text-center mt-32">
      <h1 className="text-4xl font-semibold mb-8">Start and build your crypto profile Here</h1>
      <p className="text-gray-300 text-lg">
        Only at CryptoApp,you can build a good portfolio and learn best
        practices about cryptocurrency
      </p>
      <button className="bg-blue-800 px-5 py-2 rounded-md mt-8 hover:transition duration-200 ease-out hover:bg-blue-600" type="button">Get started</button>
    </div>
  );
}

export default Banner;
