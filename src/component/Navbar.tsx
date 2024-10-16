import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-purple-900 text-white h-20 mb-4">
      <ul className="flex gap-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/countries"}>Countries</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
