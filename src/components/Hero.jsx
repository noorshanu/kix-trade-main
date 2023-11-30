import React from "react";

function Hero() {
  return (
    <section>
      <div className="container-wrapper">
        <div>
          <img src="images/logo.png" alt="" className=" mx-auto" />
        </div>
        <div>
          <img src="images/tredtext.png" alt="" className=" mx-auto py-4" />
        </div>

        <div className=" flex flex-col sm:flex-row justify-between  items-center ">
          <img src="images/free.png" alt="" />

          <h1 className="archo-black txt-s text-white
           text-5xl font-extrabold text-center">
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
