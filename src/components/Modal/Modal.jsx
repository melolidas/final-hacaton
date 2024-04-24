import React, { useCallback, useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/users/users.action";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const [registerObj, setRegisterObj] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    const { value, name } = e.target;
    setRegisterObj({ ...registerObj, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in registerObj) {
      if (!registerObj[key].trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    console.log("hello");
    dispatch(loginUser({ user: registerObj }));
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="modal">
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
                >
                  <IoMdClose onClick={handleClose} />
                </button>
                <div
                  className="
              text-lg
              font-semibold
              "
                >
                  Login
                </div>
              </div>
              <form onSubmit={handleSubmit} className="relative p-6 flex-auto">
                <Input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="email"
                />
                <Input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                />
                <Button />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
