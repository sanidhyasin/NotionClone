import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const navLinks = [
    {
      id: "share",
      title: "SHARE",
      path: "/share",
    },
    // {
    //   id: "gallery",
    //   title: "GALLERY",
    //   path: "/gallery",
    // },
    {
      id: "team",
      title: "TEAM",
      path: "/team",
    },
    {
      id: "pronite",
      title: "PRONITE",
      path: "/pronite",
    },
  ];

  return (
    <nav className="w-full flex items-start top-0">
      <div className="flex w-full justify-between items-center max-w-7xl">
        <ul className="list-none sm:flex flex-row gap-16 items-center justify-end">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-gray-700" : "text-black"
              } text-[17px] font-bold cursor-pointer hover:scale-110 transition-all`}
            >
              {/* <Link to={link.path} onClick={() => setActive(link.title)}>
                {link.title}
              </Link> */}
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
