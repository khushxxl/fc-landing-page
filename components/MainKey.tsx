import { tailoredPlans } from "@/constants";
import Image from "next/image";
import React from "react";

function MainKey() {
  return (
    <div className="w-full flex flex-col  mx-auto p-5  items-center min-h-screen justify-center">
      <h1 className="text-4xl font-bold text-center  mt-10">
        The Main key is our Community
      </h1>
      <div className="max-w-6xl  items-center w-full mt-10 flex flex-col md:flex-row md:space-x-10  justify-between">
        <div>
          <Image
            className=" rounded-xl"
            height={500}
            width={800}
            alt=""
            src={
              "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>

        <div className="space-y-7 mt-10">
          {tailoredPlans.map((data, i) => {
            return (
              <div className="max-w-2xl border p-2 rounded" key={i}>
                <p className=" font-bold">{data?.title}</p>
                <p>{data?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainKey;
