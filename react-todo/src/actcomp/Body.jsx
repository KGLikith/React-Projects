import React from "react";

const Body = (props) => {
  return (
    <div className="bodycomp w-60 min-h-44 my-2 ml-4 mr-2 p-3 pb-4 float-left bg-white rounded-lg flex flex-col justify-between ">
      <div className="para">
        <h1 className="border-none bg-white w-full p-1 outline-none font-semibold text-2xl">
          {props.text.title}
        </h1>
        <p className="border-none bg-white w-full p-1 outline-none font-normal break-words">
          {props.text.content}
        </p>
      </div>
      <div className="flex justify-end gap-3 ">
        <button
          onClick={() => {
            props.handledelete(props.id);
          }}
          className="float-right mt-3 bg-yellow-500 whitespace-pre-wrap break-words rounded-full p-2  border-none outline-none cursor-pointer hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Body;
