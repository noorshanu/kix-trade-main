import About from "./components/About";
import BuySell from "./components/BuySell";
import ClickStart from "./components/ClickStart";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="main">
        <div className=" py-3">
          <Hero />
        </div>
        <div className=" py-3">
          <BuySell />
        </div>
        <div className=" py-3">
          <ClickStart />
        </div>
       
        <div className=" py-3">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
