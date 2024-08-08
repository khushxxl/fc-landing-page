import { features } from "@/constants";
import { VerifiedIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="w-full flex flex-col  mx-auto bg-black p-5  items-center min-h-screen">
      <h1 className="text-4xl font-bold text-white mt-10">Our Features</h1>
      <div className="w-full max-w-7xl mt-10 flex items-center justify-evenly">
        {/* <div>
          <Image
            className="rounded-md"
            height={500}
            width={400}
            alt=""
            src={
              "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 xl:grid-cols-3 md:gap-x-4 md:gap-y-5 ">
          {features.map((data, i) => {
            return (
              <div
                className="flex text-xl max-w-md rounded flex-col items-center bg-white font-semibold  text-black p-2"
                key={i}
              >
                <div className="flex items-center">
                  <VerifiedIcon
                    size={30}
                    className=""
                    color="white"
                    fill="blue"
                  />
                  <h1>{data?.title}</h1>
                </div>
                <div className="mt-4 mb-4">
                  <Image
                    alt=""
                    height={200}
                    width={300}
                    key={i}
                    src={data?.image}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;

// Tailored Workout Plan, Tailored Nutrition Plan, 24/7 Access to a coach, Podcast with Experts, Exercise Demonstration Videos (Shortened Format), Intelligent Exercise Execution Tutorials (Extended Format), Informative Videos, Access to The Community,
