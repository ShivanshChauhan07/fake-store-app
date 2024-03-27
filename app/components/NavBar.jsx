import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-base-300 py-4 ">
      <div className="navbar max-w-6xl mx-auto px-8 ">
        <Link className="btn btn-ghost text-2xl" href={"/"}>
          Home
        </Link>
        <Link className="btn btn-ghost text-2xl" href={"/contact"}>
          Contact
        </Link>
        <Link className="btn btn-ghost text-2xl" href={"/about"}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
