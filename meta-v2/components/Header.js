import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";

function Header() {
  return (
    <div className="px-5 py-3 bg-neutral-900 flex space-x-3 justify-center items-center">
      <BsFacebook className="h-8 w-8 text-cyan-400 mr-5" />
      <div className="flex items-center relative flex-1">
        <BiSearchAlt className="h-5 w-5 absolute left-3 text-slate-400" />
        <input
          maxLength={25}
          type="text"
          placeholder="search"
          className="flex-1 rounded-xl p-3 bg-neutral-800 pl-10 text-lg outline-none"
        ></input>
      </div>
      <div>
        <img
          className="h-10 w-10 ml-3 rounded-full border border-sky-500"
          src="https://avatars.githubusercontent.com/u/72876374?v=4"
        ></img>
      </div>
      <CgOptions className="h-6 w-6" />
    </div>
  );
}

export default Header;