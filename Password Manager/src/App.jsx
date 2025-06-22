import { useState } from "react";
import Navbar from "./components/Navbar";
import Bg from "./components/Bg";
import Manager from "./components/Manager";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <Bg>
        <Navbar />
        <div className="min-h-[83vh]">
          <Manager/>
        </div>
        <Footer/>
      </Bg>
    </>
  );
}

export default App;
