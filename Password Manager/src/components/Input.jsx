import React, { useEffect } from "react";
import { useState, useRef } from "react";

const Input = (props) => {
  const ref = useRef(this);
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setform({
      name: props.form.name,
      email: props.form.email,
      password: props.form.password,
    });
  }, [props.form]);
  
  const showPassword = async (e) => {
    if (
      e.target.outerHTML ==
      '<i class="fa-solid fa-eye-slash fa-xl right-3 top-7"></i>'
    ) {
      e.target.outerHTML = `<lord-icon
                  src="https://cdn.lordicon.com/vfczflna.json"
                  trigger="hover"
                ></lord-icon>`;
      ref.current.type = "password";
    } else {
      e.target.outerHTML =
        '<i class="fa-solid fa-eye-slash fa-xl right-3 top-7"></i>';
      ref.current.type = "text";
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-black flex flex-col p-4 w-full gap-5 items-center">
      <input
        className="rounded-full border border-green-400 px-5 py-2 text-xl w-full"
        placeholder="Enter website name"
        autoComplete="false"
        type="text"
        name="name"
        value={form.name}
        minLength={1}
        onChange={handleChange}
      />
      <div className="flex flex-col md:flex-row w-full gap-3">
        <input
          className="rounded-full border border-green-400 px-5 py-2 text-xl md:w-3/4 w-full"
          type="text"
          autoComplete="false"
          placeholder="Enter email"
          name="email"
          value={form.email}
          minLength={1}
          onChange={handleChange}
        />
        <div className="relative w-full md:w-auto">
          <input
            className="rounded-full border border-green-400 px-5 py-2 text-xl w-full"
            placeholder="Enter password"
            name="password"
            type="password"
            
            value={form.password}
            minLength={1}
            ref={ref}
            onChange={handleChange}
          />
          <button className="absolute right-3 top-2 " onClick={showPassword}>
            <lord-icon
              src="https://cdn.lordicon.com/vfczflna.json"
              trigger="hover"
            ></lord-icon>
          </button>
        </div>
      </div>
      {props.form.name === "" ? (
        <button
          onClick={(e) => {
            props.savePassword(form);
            setform({ name: "", email: "", password: "" });
          }}
          className="text-xl border px-5 py-2 rounded-full bg-green-600 text-white w-fit flex items-center gap-2 hover:bg-green-500"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
          Add Password
        </button>
      ) : (
        <button
          onClick={(e) => {
            props.updatePassword(props.form.id,form);
          }}
          className="text-xl border px-5 py-2 rounded-full bg-green-600 text-white w-fit flex items-center gap-2 hover:bg-green-500"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
          Update Password
        </button>
      )}
    </div>
  );
};

export default Input;
