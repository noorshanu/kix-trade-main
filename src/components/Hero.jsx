import React from "react";

function Hero() {
  return (
    <section className=" relative">
      <div className=" absolute w-full top-[60%] sm:-top-[54%] overflow-y-hidden"></div>
      <div className=" absolute w-full top-[58%] sm:top-[24%] overflow-y-hidden">
        <img
          src="images/chart.gif"
          alt=""
          className=" w-full max-w-lg sm:max-w-5xl h-full mx-auto  block  opacity-60"
        />
      </div>
      <div className=" absolute top-[62%] sm:top-[43%] left-0 right-0 z-[2]  ">
        <img
          src="images/team.gif"
          alt=""
          className=" w-full max-w-lg sm:max-w-2xl h-full mx-auto  block "
        />
      </div>
      <div className="container-wrapper relative z-50">
        <div className="my-3 sm:my-2">
          <img
            src="images/logo.png"
            alt=""
            className=" mx-auto h-[2rem] sm:h-[40px]"
          />
        </div>
        <div>
          <img
            src="images/tredtext.png"
            alt=""
            className=" mx-auto py-1 -mt-3  sm:-mt-0 sm:py-4 sm:h-[6.5rem] h-[3.5rem] "
          />
        </div>

        <div className=" flex justify-center  sm:justify-between  items-center relative ">
          <div className=" absolute -top-[45%] right-[-20px] sm:right-[-2px] z-[2] hidden sm:block "></div>

          <div className=" absolute -top-[46%] sm:-top-[45%] -left-[30px]  sm:-left-[14px] z-[2] hidden sm:block  "></div>
          <img
            src="images/free.png"
            alt=""
            className="sm:h-[18rem] h-[9rem] relative "
          />

          <h1
            className="archo-black  text-white -mt-16 sm:-mt-52 lh-1_1 
          sm:text-2xl text-lg font-extrabold text-center"
          >
            {" "}
            BUY & SELL <br />
            FOOTBALLERS
          </h1>

          <img src="images/now.png" alt="" className="sm:h-[18rem] h-[9rem]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
