import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="flex gap-4 border rounded-1xl bg-blue-400 ">
        <Link href={`/`}>home</Link>
        <Link href={`/blog`}>Blog</Link>
        <Link href={`/`}>about</Link>
        <Link href={`/form-submit`}>form submit</Link>
      </nav>
    </div>
  );
};

export default Navbar;
