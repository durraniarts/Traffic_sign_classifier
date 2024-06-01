import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import About_app from "./pages/About_app";
import About_dev from "./pages/About_dev";
import Content from "./pages/Content";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [imageData, setImageData] = useState<any | undefined>();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-12 py-12 bg-zinc-900 min-h-[100vh]">
        <Routes>
          <Route
            path="/"
            element={<Home imageData={imageData} setImageData={setImageData} />}
          />
          <Route
            path="/sign/:name"
            element={<Content imageData={imageData} />}
          />
          <Route path="/explore-all-signs" element={<Explore />} />
          <Route path="/about-application" element={<About_app />} />
          <Route path="/about-developer" element={<About_dev />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
