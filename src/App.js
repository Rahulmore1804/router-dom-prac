import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import {Link} from "react-router-dom";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<div>bngfjbngfnbk ffmbofndj gfbiob jfbivf</div>}
          >
            {" "}
          </Route>
          <Route exact path="/about" element={<About />}>
            {" "}
          </Route>
          <Route exact path="/contact" element={<Contact />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
