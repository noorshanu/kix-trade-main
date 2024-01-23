import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";


function App() {

  return (
    <>
     <Router>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/v2" element={<Home2/>} />
     </Routes>
 </Router>
    </>
  );
}

export default App;
