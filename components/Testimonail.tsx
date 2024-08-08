import { testimonials } from "@/constants";
import { TwitterIcon } from "lucide-react";
import React from "react";

function Testimonail() {
  return (
    <div className="w-full flex flex-col  mx-auto  p-5  items-center ">
      <h1 className="text-4xl font-bold mt-10">Public Cheers for us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center  place-content-center gap-x-4 gap-y-4 mt-20">
        {testimonials.map((data, i) => {
          return (
            <div className="border max-w-sm min-h-[150px] p-2 rounded-xl">
              <div className="flex items-center justify-between">
                <p className="mt-4 font-bold">{data?.name}</p>
                <TwitterIcon className=" cursor-pointer" fill="blue" color="" />
              </div>
              <p className="mt-4">{data?.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonail;
