import React from "react";

function BuySell() {
  return (
    <section className=" relative mt-[19%] sm:mt-[2%]">
      <div className="container-wrapper relative z-50">
        <div className="flex justify-center w-full "></div>
        <div className=" flex justify-center gap-[6%] relative z-[955]">
          {/* <a
            href="/"
            className=" bg-[#b553be] px-6  sm:px-10 py-1 sm:py-1 text-[14px] sm:text-xl archo-black text-white rounded-md uppercase cursor-pointer relative z-[9999]"
          >
            Buy
          </a>
          <a
            href="/"
            className=" bg-[#33eceb] px-5  sm:px-10 py-1 sm:py-1 text-[14px] sm:text-xl archo-black text-white rounded-md uppercase cursor-pointer relative z-[9999] "
          >
            {" "}
            sell
          </a> */}
        </div>

        <div className=" flex justify-center mt-[1%]">
          <img src="images/share.png" alt="" className="sm:h-[6rem] h-[5.4rem] mt-3 sm:mt-0 mb-1" />
        </div>

        
      </div>
    </section>
  );
}

export default BuySell;
