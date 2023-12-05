import React from "react";

function Hero() {
  return (
    <section className=" relative">
      <div className=" absolute w-full top-[60%] sm:-top-[54%] overflow-y-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full opacity-40">
          <source src="images/stad.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" absolute w-full top-[50%] sm:-top-[54%] overflow-y-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full opacity-40">
          <source src="images/chart.webm" type="video/webm" />
        
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" absolute top-[26%] sm:top-[-4%] left-0 right-0 z-[2]  ">
        <video
          autoPlay
          loop
          muted
          playsInline
          
          className="w-full max-w-3xl h-full mx-auto "
        >
            <source src="images/tem3.webm" type="video/mp4" />
          <source src="images/team.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container-wrapper relative z-50">
        <div className=" my-4">
          <img src="images/logo.png" alt="" className=" mx-auto h-[2.4rem] sm:h-auto" />
        </div>
        <div>
          <img src="images/tredtext.png" alt="" className=" mx-auto py-4 sm:h-[6rem] h-[4.5rem] " />
        </div>

        <div className=" flex justify-center  sm:justify-between  items-center relative ">
        <div className=" absolute -top-[43%] right-[-20px] sm:right-0 z-[2] hidden sm:block ">
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


      <div className=" absolute -top-[46%] sm:-top-[45%] -left-[30px]  sm:-left-[14px] z-[2] hidden sm:block  ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-3xl h-full mx-auto "
        >
          <source src="images/ring-l.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          <img src="images/free.png" alt="" className="sm:h-[16rem] h-[8rem] relative " />

          <h1
            className="archo-black txt-s text-white -mt-16 sm:-mt-52
          sm:text-4xl text-lg font-extrabold text-center"
          >
            {" "}
            BUY & Sell <br />
            FOOTBALLERS
          </h1>

          <img src="images/now.png" alt="" className="sm:h-[16rem] h-[8rem]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
