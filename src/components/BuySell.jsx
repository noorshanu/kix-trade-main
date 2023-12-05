import React from "react";

function BuySell() {
  return (
    <section className=" relative mt-[6%]">
      <div className="container-wrapper relative z-50">
        <div className="flex justify-center w-full "></div>
        <div className=" flex justify-center gap-[16%] relative z-[955]">
          <a
            href="/"
            className=" bg-[#b553be] px-10 py-2 text-2xl archo-black text-white rounded-md uppercase cursor-pointer relative z-[9999]"
          >
            Buy
          </a>
          <a
            href="/"
            className=" bg-[#33eceb] px-10 py-2 text-2xl archo-black text-white rounded-md uppercase cursor-pointer relative z-[9999] "
          >
            {" "}
            sell
          </a>
        </div>

        <div className=" flex justify-center mt-[1%]">
          <img src="images/share.png" alt="" className="h-[7rem]" />
        </div>
      </div>
    </section>
  );
}

export default BuySell;
