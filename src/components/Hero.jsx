import React from "react";

function Hero() {
  return (
    <section className=" relative">
      <div className=" absolute w-full -top-[54%] overflow-y-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full opacity-40">
          <source src="images/stad.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" absolute w-full -top-[54%] overflow-y-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full opacity-40">
          <source src="images/chart.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" absolute -top-[0%] left-0 right-0 z-[2] ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-7xl h-full mx-auto "
        >
          <source src="images/team.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container-wrapper relative z-50">
        <div className=" my-4">
          <img src="images/logo.png" alt="" className=" mx-auto" />
        </div>
        <div>
          <img src="images/tredtext.png" alt="" className=" mx-auto py-4" />
        </div>

        <div className=" flex  justify-between  items-center ">
          <img src="images/free.png" alt="" />

          <h1
            className="archo-black txt-s text-white -mt-44
           text-5xl font-extrabold text-center"
          >
            {" "}
            BUY & Sell <br />
            FOOTBALLERS
          </h1>

          <img src="images/now.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
