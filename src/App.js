import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

import Package01 from "./pages/Package01";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/Contact";
import Package02 from "./pages/Package02";
import Package03 from "./pages/Package03";

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-259770810-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  return (
    <Router>
      <ScrollToTop>
      <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/package01" element={<Package01/>}></Route>
        <Route path="/package02" element={<Package02/>}></Route>
        <Route path="/package03" element={<Package03/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes> 
      </div>
      </ScrollToTop>
    </Router> 
  );
}

export default App;
