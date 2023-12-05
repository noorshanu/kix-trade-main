import React from "react";

function ClickStart() {
  return (
    <section className=" relative mt-[3%] sm:mt-[5%]">
      <div className="container-wrapper relative z-[999]">
        <div className="bg-[#3b8ca5b3] rounded-lg  py-12">
          <h1 className=" archo-black  text-white text-base sm:text-2xl font-semibold text-center">
            <span className=" txt-s font-extrabold">Create an account </span>{" "}
            with a social login <br /> OR just connect your wallet. <br />
            Either way it’s a <br />
            <span className="txt-s font-extrabold">
              {" "}
              seamless, secure experience!{" "}
            </span>
          </h1>
          <div className=" mx-auto flex justify-center mt-8 mb-4">
            <a
              href="/"
              className=" uppercase archo-black text-lg sm:text-3xl txt-s py-3 px-12 rounded-lg  bg-[#11cac9]  text-[#edd400] mx-auto btn-hov "
            >
              {" "}
              click to start
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClickStart;
