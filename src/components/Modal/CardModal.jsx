import React, { useCallback, useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/users/users.action";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const [addCard, setAddCard] = useState({
    title: "",
    slug: "",
    image: "",
    price: "",
    rating: "",
    comment_q: "",
    comments_rating: "",
    allowed_dates: "",
    desc: "",
    category: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setAddCard({ ...addCard, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in addCard) {
      if (!addCard[key].trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    console.log("hello");
  }

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
                  <IoMdClose />
                </button>
                <div
                  className="
              text-lg
              font-semibold
              "
                >
                  Add Card
                </div>
              </div>
              <form onSubmit={handleSubmit} className="relative p-6 flex-auto">
                <Input
                  name="title"
                  onChange={handleChange}
                  type="text"
                  placeholder="title"
                />
                <Input
                  name="slug"
                  onChange={handleChange}
                  type="text"
                  placeholder="slug"
                />
                <Input
                  name="image"
                  onChange={handleChange}
                  type="image"
                  placeholder="image"
                />
                <Input
                  name="price"
                  onChange={handleChange}
                  type="file"
                  placeholder="price"
                />
                <Input
                  name="rating"
                  onChange={handleChange}
                  type="text"
                  placeholder="rating"
                />
                <Input
                  name="comment_q"
                  onChange={handleChange}
                  type="text"
                  placeholder="comment q"
                />
                <Input
                  name="comments_rating"
                  onChange={handleChange}
                  type="text"
                  placeholder="comments rating"
                />
                <Input
                  name="allowed_dates"
                  onChange={handleChange}
                  type="text"
                  placeholder="allowed dates"
                />
                <Input
                  name="desc"
                  onChange={handleChange}
                  type="text"
                  placeholder="desc"
                />
                <Input
                  name="category"
                  onChange={handleChange}
                  type="category"
                  placeholder="category"
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
