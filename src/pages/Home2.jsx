import About from "../components/About";
import BuySell from "../components/BuySell";
import ClickStart from "../components/ClickStart";
import Hero from "../components/Hero";
import { Bars } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react';

function Home2() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // 1000 milliseconds = 1 second
  
      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }, []);
    return (
      <>
    {loading && (
          <div className="loader flex justify-center items-center bg-[#6dc5f8] main h-[100vh]">
            <Bars
              height="100"
              width="100"
              visible={true}
              color="#33eceb"
              ariaLabel="falling-circles-loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        )}
        <div className={`main overflow-y-hidden ${loading ? 'hidden' : ''}`}>
          <div className=" py-3">
            <Hero />
          </div>
          <div className=" py-3">
            <BuySell />
          </div>
          <div className=" py-1">
            <ClickStart />
          </div>
          <div className=" py-2">
            <About />
          </div>
        </div>
      </>
    );
  }

export default Home2