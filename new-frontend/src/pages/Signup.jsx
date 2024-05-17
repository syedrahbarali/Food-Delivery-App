function Signup() {
  return (
    <div>
      <h1 className="py-10 text-3xl text-blue-950 font-medium lg:text-center lg:text-4xl">
        Register to <span className="font-bold text-red-600">Vote</span>
      </h1>

      <div className="lg:w-4/12 mx-auto">
        <form action="" className="flex flex-col gap-5 font-normal">
          <div className="flex flex-col">
            <label className="w-fit" htmlFor="adhaar-number">
              Adhaar Number
            </label>
            <input
              className="border border-black rounded-md p-2"
              type="number"
              id="adhaar-number"
              placeholder="Enter your Adhaar Number"
            />
          </div>

          <div className="flex flex-col">
            <label className="w-fit" htmlFor="name">
              Name
            </label>
            <input
              className="border border-black rounded-md p-2"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label className="w-fit" htmlFor="password">
              Password
            </label>
            <input
              className="border border-black rounded-md p-2"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="p-3 bg-red-500 text-white font-medium rounded-xl hover:opacity-80 transition-[opacity]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
