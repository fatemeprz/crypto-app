import unlock from "../../src/assets/unlock.png";
import activity from "../../src/assets/activity.png";
import integrated from "../../src/assets/Integrated-app.png";
import multiCurrency from "../../src/assets/bitcoin-convert.png";
import { v4 as uuid } from "uuid";
import WhyUSCards from "./WhyUSCards";

function WhyUs() {
  const cards = [
    { id: uuid(), name: "Safe and Secure", image: unlock },
    { id: uuid(), name: "Good invesment", image: activity },
    { id: uuid(), name: "Integrated app", image: integrated },
    { id: uuid(), name: "Multi Curency Support", image: multiCurrency},
  ];
  return (
    <>
    <div className="text-center mt-14">
      <p className="text-blueCyan text-xl ">Why Choose Us?</p>
      <h4 className="text-3xl my-3 font-semibold ">Safe, guaranteed, and easy to use</h4>
      <p className="w-3/5 mx-auto my-5 text-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        doloremque, impedit voluptas ipsum inventore dolores odio nobis quo
        quidem, error beatae nulla, ut sequi. Error ipsa ratione quisquam rerum
        atque.
      </p>
      </div>
      <div className="grid  w-11/12 sm:w-full m-auto lg:grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
        {cards.map((item) => (
          <WhyUSCards key={item.id} cards={item} />
        ))}
      </div>
    </>
  );
}

export default WhyUs;
