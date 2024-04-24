import React from "react";

const Input = ({ type, placeholder, value, name, onChange }) => {
  return (
    <div className=" w-full relative">
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="peer w-full p-4 pt-2 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 "
      />
    </div>
  );
};

export default Input;
