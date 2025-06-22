import React from "react";

const Bg = (props) => {
  return (
    <div className="inset-0 -z-10 h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    {props.children}
    </div>
  );
};

export default Bg;
