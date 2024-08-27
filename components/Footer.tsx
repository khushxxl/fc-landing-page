import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="h-[50vh] bg-black flex items-center justify-center flex-col space-y-10">
      <h1 className="text-white text-3xl font-bold">
        Join Fit Center Now for exclusive offers
      </h1>

      <div className="flex items-center border-2 p-2 rounded-xl cursor-pointer bg-white ">
        <Image
          alt=""
          width={40}
          height={40}
          src={
            "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png"
          }
        />
        Download Now
      </div>

      <h1 className="text-white text-sm">2024 © Fit Center</h1>
    </div>
  );
}

export default Footer;
