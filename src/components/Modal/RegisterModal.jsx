import React, { useCallback, useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { registerUser } from "../../store/users/users.action";
import { useDispatch } from "react-redux";

const Modal = () => {
  const [registerObj, setRegisterObj] = useState({
    email: "",
    password: "",
    password_confirm: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    const { value, name } = e.target;
    setRegisterObj({ ...registerObj, [name]: value });
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    for (let key in registerObj) {
      if (!registerObj[key].trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    dispatch(registerUser({ ...registerObj }));
  }
  return (
    <div
      className="
  justify-center 
  items-center 
  flex 
  overflow-x-hidden 
  overflow-y-auto 
  fixed 
  inset-0 
  z-50 
  outline-none 
  focus:outline-none 
  bg-neutral-800/70"
    >
      <div
        className="
    relative 
    w-full 
    md:w-4/6 
    lg:w-3/6 
    xl:w-2/5 
    my-6 
    mx-auto 
    h-full 
    lg:h-auto 
    md:h-auto
    "
      >
        <div
          className="
      translate 
      duration-300 
      h-full"
        >
          <div
            className="
      translate 
        h-full 
        lg:h-auto 
        md:h-auto 
        border-0 
        rounded-lg 
        shadow-lg 
        relative 
        flex 
        flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none

        "
          >
            <div
              className="
          
          flex 
          items-center 
          p-6 
          rounded-t 
          justify-center 
          relative 
          border-b-[1px]
          "
            >
              <button
                className="
            p-1 
            border-0 
            hover:opacity-70 
            absolute 
            left-9
             "
              ></button>
              <div
                className="
            text-lg
            font-semibold
            "
              >
                Register
              </div>
            </div>
            <form onSubmit={handleSubmit} className="relative p-6 flex-auto">
              <Input
                value={registerObj.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="email"
              />
              <Input
                value={registerObj.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="password"
              />
              <Input
                value={registerObj.password_confirm}
                onChange={handleChange}
                type="password"
                name="password_confirm"
                placeholder="password confirm"
              />
              <Button />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
