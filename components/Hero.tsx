import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
      className="w-full flex bg-cover space-y-10 flex-col lg:flex-row bg-center bg-no-repeat text-white  justify-center lg:justify-evenly  items-center min-h-screen h-full  lg:min-h-[80vh]"
    >
      <div className="space-y-5 mt-10  lg:mt-0   flex flex-col justify-center items-center md:items-start text-center lg:text-left">
        <h1 className="text-2xl  lg:text-4xl  font-bold bg-clip-text  ">
          WHERE STRENGTH MEETS LONGEVITY
        </h1>
        <h1 className="max-w-xs lg:max-w-lg text-md  font-semibold">
          Et et sea est et eirmod, duo vero et et tempor labore tempor, et
          voluptua rebum magna invidunt sit accusam, ipsum labore et et amet no
          et, lorem sed elitr.
        </h1>
      </div>

      {/* right  */}
      <div className="">
        <Image
          height={500}
          alt=""
          className="rounded-3xl border-black border-2"
          src={require("../app/assets/demo1.png")}
        />
      </div>
    </div>
  );
}

export default Hero;
