import React from "react";

function About() {
  return (
    <section className=" relative overflow-y-hidden">
      <div className="container-wrapper relative z-50 max-w-3xl mx-auto">
        <div className="bg-[#a149a9b2] rounded-lg py-2 sm:py-8 px-2">
          <h1
            className=" archo-black   text-white text-2xl 
      font-semibold text-center"
          >
            ABOUT KIX
          </h1>
          <div className=" max-w-xl mx-auto text-center">
            <p className="font-work font-medium text-white text-base sm:text-lg let-space  py-5">
              Welcome to <span className="txt-s font-semibold">KiX </span> , a
              Live Football Gaming Platform where users can buy and sell digital
              assets representing the world’s most exciting footballers and
              compete to win based on their real-world match performances.
            </p>

            <p className="font-work font-medium text-white text-base sm:text-lg let-space">
              <span className="txt-s font-semibold">KiX </span> is Alpha Testing
              on the Polygon Testnet NOW and  <span className="txt-s font-semibold">Tradeathon</span>  is our biggest and best
              game yet, with prizes to be won twice a week, EVERY week!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
