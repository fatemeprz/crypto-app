import start from "../../assets/start.svg";

function StartNow() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between my-36">
      <img className="sm:w-72 w-48 mb-14 lg:mb-0 lg:mr-52" src={start} alt="start-now" />
      <div>
        <p className="text-blueCyan text-xl my-3">Start now</p>
        <p className="text-3xl mb-7">Sign up to learn more</p>
        <p className="text-text mb-5 pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sed
          commodi ea dicta dolores nostrum? Quisquam quo beatae est numquam
          quidem corrupti, magni aut vel impedit, possimus omnis fugit hic
        </p>
        <div className="mt-4">
          <input
            className="my-8 py-1 px-2 sm:px-4 text-sm md:text-base text-black outline-none rounded-s-xl w-40 sm:w-44 md:w-60 h-10 "
            type="text"
            placeholder="Enter your email"
          />
          <button
            className="bg-blueCyan h-10  md:text-base  text-sm px-1.5 sm:px-3 sm:mt-10 md:px-5  py-2 rounded-r-xl hover:bg-cyan-300 transition duration-300"
            type="button"
          >
            Subscribes
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartNow;
