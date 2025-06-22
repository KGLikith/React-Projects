import React from "react";
import NavbarBg from "./NavbarBg";

const Navbar = () => {
  return (
    <>  
        <NavbarBg>
          <div className="logo">
            <span className="text-green-700"> &lt;</span>
              PassWord
            <span className="text-green-700"> MANAGER/&gt;</span>
          </div>
          <ul>
              <li className="flex gap-5 text-base ">
                  <a className="hover:font-bold hover:text-green-400" href="/">Home</a>
                  <a className="hover:font-bold hover:text-green-400" href="/">About</a>
                  <a className="hover:font-bold hover:text-green-400" href="/">Contact</a>
              </li>
          </ul>
        </NavbarBg>
    </>
  );
};

export default Navbar;
