import React from "react";

function VideoPromo() {
  return (
    <div className="w-full flex flex-col max-w-7xl mx-auto justify-center items-center p-10 min-h-[70vh]">
      <div className="">
        <iframe
          className="h-[200px] w-[400px] lg:h-[400px] lg:w-[800px]"
          src="https://www.youtube.com/embed/FMNqCthCZCc?si=TvbIidtvVWh9JalF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <h1 className="mt-10 text-3xl text-center font-bold">
        Join over 200 members achieving their goal physique!
      </h1>
      <div className="bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500 p-3 mt-10 border rounded-xl px-5 cursor-pointer">
        Join Now
      </div>
    </div>
  );
}

export default VideoPromo;
