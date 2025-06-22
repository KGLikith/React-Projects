import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "./Input";
import Table from "./Table";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Manager = () => {
  const [passArray, setpassArray] = useState([]);
  const [editform, seteditform] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    let passwords;
    const getdata = async () => {
      passwords = (await axios.get("http://localhost:3000")).data;
      console.log(passwords);
      if (passwords) {
        setpassArray(passwords);
      }
    };
    getdata();
  }, []);

  const savePassword = async (form) => {
    if (
      form.email.length < 5 ||
      form.name.length < 2 ||
      form.password.length < 6
    ) {
      return toast.error("Inalid credentials", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    const id = uuidv4();
    setpassArray([...passArray, { ...form, id }]);
    const result = await axios.post(
      "http://localhost:3000",
      { ...form, id: id },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (result)
      toast.success("Password Added successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
  };

  const editPass = (id) => {
    const form = passArray.find((pass) => id == pass.id);
    seteditform(form);
  };

  const updatePassword = async (id, updatedform) => {
    const result = await axios.delete("http://localhost:3000", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        id: id,
      },
    });
    await axios.post(
      "http://localhost:3000",
      { ...updatedform, id: id },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    setpassArray((await axios.get("http://localhost:3000")).data);
    seteditform({
      name: "",
      email: "",
      password: "",
    });
    toast.success("Password Updated successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const deletePass = async (id) => {
    console.log(id);
    let conf = confirm("Do you want to delete this password");
    if (conf) {
      const array = passArray.filter((pass) => id != pass.id);
      setpassArray(array);
      const result = await axios.delete("http://localhost:3000", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          id: id,
        },
      });
      console.log(result);
      if (result) {
        toast.success("Password deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      return array;
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        limit={2}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        transitiom={Bounce}
      />

      <div className="container mx-auto py-14 max-w-4xl text-center items-center justify-center flex flex-col">
        <h1 className="text-4xl font-bold">
          <span className="text-green-700">&lt;</span>
          PassWord
          <span className="text-green-900"> MANAGER/&gt;</span>
        </h1>

        <p className="text-green-900 text-lg">
          Don't have to remember your password no more
        </p>

        <Input
          savePassword={savePassword}
          form={editform}
          updatePassword={updatePassword}
        />

        <Table
          passArray={passArray}
          deletePass={deletePass}
          editPass={editPass}
        />
      </div>
    </>
  );
};

export default Manager;
