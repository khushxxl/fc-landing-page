import { MenuIcon, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="p-5 top-0 bg-white sticky z-50 flex items-center justify-between w-full  border-b-2">
      <div>
        <Image
          height={50}
          alt=""
          width={100}
          src={require("../app/assets/fcTextLogo2.png")}
        />
      </div>
      {/* 
      <div className="hidden lg:flex">
        <ul className="flex space-x-10">
          <li>Coaching</li>
          <li>Nutrition</li>
          <li>Personal</li>
        </ul>
      </div> */}

      <div className="">
        <div className="flex items-center border-2 p-2 rounded-xl cursor-pointer ">
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
      </div>
      {/* 
      <div className="lg:hidden">
        <MenuIcon />
      </div> */}
    </div>
  );
}

export default Navbar;
