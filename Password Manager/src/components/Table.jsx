import React from "react";
import { toast,Bounce } from "react-toastify";

const Table = (props) => {
  const passArray = props.passArray;

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Text copied!", {
      position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
  };

  return (
    <div className="w-full mt-3 overflow-scroll md:overflow-hidden container mb-2">
      <h1 className="text-2xl font-bold">Your Passwords</h1>
      {passArray.length == 0 ? (
        <div className="text-xl">No Passwords to show</div>
      ) : (
        <table className="table-auto w-full rounded-xl overflow-hidden">
          <thead className=" bg-green-700 text-white">
            <tr>
              <th className="py-2 border-white border">Website</th>
              <th className="py-2 border-white border">Email</th>
              <th className="py-2 border-white border">Password</th>
              <th className="py-2 border-white border">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-green-100">
            {passArray.map((pass, id) => {
              return (
                <tr key={id}>
                  <td className="py-2 border-white border  text-lg px-5">
                    <div className="flex items-center justify-between">
                      <a href={pass.name} target="_blank">
                        {pass.name}
                      </a>
                      <i
                        className="fa-solid fa-copy hover:cursor-pointer"
                        onClick={(e) => copyText(pass.name)}
                      ></i>
                    </div>
                  </td>
                  <td className="py-2 border-white border text-lg px-5">
                    <div className="flex items-center justify-between">
                      <span>{pass.email}</span>
                      <i
                        className="fa-solid fa-copy hover:cursor-pointer"
                        onClick={(e) => copyText(pass.email)}
                      ></i>
                    </div>
                  </td>
                  <td className="py-2 border-white border text-lg px-5">
                    <div className="flex items-center justify-between">
                      <span>{"*".repeat(pass.password.length)}</span>
                      <i
                        className="fa-solid fa-copy hover:cursor-pointer"
                        onClick={(e) => copyText(pass.password)}
                      ></i>
                    </div>
                  </td>
                  <td className="py-2 border-white border text-lg px-5">
                    <span className="cursor-pointer flex items-center  gap-2 justify-between">
                      <lord-icon
                        onClick={(e) => props.editPass(pass.id)}
                        src="https://cdn.lordicon.com/wuvorxbv.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                      <lord-icon
                        onClick={(e) => props.deletePass(pass.id)}
                        src="https://cdn.lordicon.com/drxwpfop.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
