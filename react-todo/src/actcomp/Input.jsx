import React from "react";
import { useState } from "react";

const Input = (props) => {
  const [text, settext] = useState({
    title: "",
    content: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    settext((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="flex flex-col relative mx-auto my-7 bg-white p-4 rounded-lg" >
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={text.title}
          onChange={handlechange}
          className="border-none bg-white w-full p-1 outline-none font-bold text-lg"
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
          onChange={handlechange}
          className="border-none bg-white w-full p-1 outline-none font-semibold resize-none"
        ></textarea>
        <button
          onClick={(e) => {
            props.onsubmit(text);
            settext({ title: "", content: "" });
            e.preventDefault();
          }}
          className="absolute right-9 px-3 bg-yellow-500 rounded-full p-2  border-none outline-none cursor-pointer hover:text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
