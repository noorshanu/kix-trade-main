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
      <div className=" absolute top-[-4%] left-0 right-0 z-[2]  ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-3xl h-full mx-auto "
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
          <img src="images/tredtext.png" alt="" className=" mx-auto py-4 sm:h-[6rem] h-auto " />
        </div>

        <div className=" flex  justify-between  items-center relative ">
        <div className=" absolute -top-[43%]  right-0 z-[2]  ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-3xl h-full mx-auto "
        >
          <source src="images/ring-r.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          <img src="images/free.png" alt="" className="h-[16rem]" />

          <h1
            className="archo-black txt-s text-white -mt-52
          sm:text-4xl text-lg font-extrabold text-center"
          >
            {" "}
            BUY & Sell <br />
            FOOTBALLERS
          </h1>

          <img src="images/now.png" alt="" className="h-[16rem]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
