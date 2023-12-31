import React from "react";

function Hero() {
  return (
    <section className=" relative">
      <div className=" absolute w-full top-[60%] sm:-top-[54%] overflow-y-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full opacity-40">
          {/* <source src="images/stad.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" absolute w-full top-[58%] sm:-top-[35%] overflow-y-hidden">
        <video autoPlay loop muted playsInline className="w-full max-w-6xl mx-auto h-full opacity-40 sm:block hidden ">
          <source src="images/chart.webm" type="video/webm" />
        
          Your browser does not support the video tag.
        </video>
        <img src="images/chart.gif" alt="" className=" w-full max-w-lg sm:max-w-2xl h-full mx-auto  block sm:hidden opacity-40" />
      </div>
      <div className=" absolute top-[62%] sm:top-[-1%] left-0 right-0 z-[2]  ">
        <video
          autoPlay
          loop
          muted
          playsInline
          
          className="w-full max-w-lg sm:max-w-2xl h-full mx-auto sm:block hidden "
        >
            {/* <source src="images/tem3.webm" type="video/mp4" /> */}
          <source src="images/team.webm" type="video/webm" />
         
          Your browser does not support the video tag.
        </video>
        <img src="images/team.gif" alt="" className=" w-full max-w-lg sm:max-w-2xl h-full mx-auto  block sm:hidden" />
      </div>
      <div className="container-wrapper relative z-50">
        <div className="my-3 sm:my-2">
          <img src="images/logo.png" alt="" className=" mx-auto h-[2rem] sm:h-[40px]" />
        </div>
        <div>
          <img src="images/tredtext.png" alt="" className=" mx-auto py-1 -mt-3  sm:-mt-0 sm:py-4 sm:h-[6.5rem] h-[3.5rem] " />
        </div>

        <div className=" flex justify-center  sm:justify-between  items-center relative ">
        <div className=" absolute -top-[45%] right-[-20px] sm:right-[-2px] z-[2] hidden sm:block ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-4xl h-full mx-auto "
        >
          {/* <source src="images/ring-r.webm" type="video/mp4" /> */}
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
          {/* <source src="images/ring-l.webm" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
          <img src="images/free.png" alt="" className="sm:h-[18rem] h-[9rem] relative " />

          <h1
            className="archo-black txt-s text-white -mt-16 sm:-mt-52 lh-1_1 
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
