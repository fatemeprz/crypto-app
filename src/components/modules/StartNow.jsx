import start from "../../assets/start.svg";

function StartNow() {
  return (
    <div className="flex items-center justify-between my-36">
      <img className="w-72 mr-52 " src={start} alt="start-now" />
      <div>
        <p className="text-blueCyan text-xl my-3">Start now</p>
        <p className="text-3xl mb-7">Sign up to learn more</p>
        <p className="text-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sed
          commodi ea dicta dolores nostrum? Quisquam quo beatae est numquam
          quidem corrupti, magni aut vel impedit, possimus omnis fugit hic
        </p>
        <div>
          <input
            className="my-8 py-1 px-4 text-black outline-none rounded-s-xl w-64 h-10"
            type="text"
            placeholder="Enter your email"
          />
          <button
            className="bg-blueCyan h-10 px-5 py-2 rounded-r-xl hover:bg-cyan-300 transition duration-300"
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
