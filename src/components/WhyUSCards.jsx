import React from "react";

function WhyUSCards({ cards: { image, name } }) {
 
  return (
    <div className="border border-darkborder rounded-xl px-8 py-7 my-10">
      <h3>
        <img src={image} className="p-3 w-18 bg-darkbox rounded-3xl" alt="why-us" />
        <span className="text-2xl font-semibold inline-block my-4">{name}</span>
      </h3>
      <p className="text-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit saepe
      tempore iste officia distinctio dolore ullam commodi sapiente facere
      doloribus</p>
    </div>
  );
}

export default WhyUSCards;
