import React from "react";

function BuySell() {
  return (
    <section className=" relative mt-[14%]">
      <div className="container-wrapper relative z-50">
        <div className="flex justify-center w-full "></div>
        <div className=" flex justify-center gap-[16%]">
          <a
            href="/"
            className=" bg-[#b553be] px-10 py-2 text-2xl archo-black text-white rounded-md uppercase"
          >
            Buy
          </a>
          <a
            href="/"
            className=" bg-[#33eceb] px-10 py-2 text-2xl archo-black text-white rounded-md uppercase"
          >
            {" "}
            sell
          </a>
        </div>

        <div className=" flex justify-center mt-[5%]">
          <img src="images/share.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default BuySell;
