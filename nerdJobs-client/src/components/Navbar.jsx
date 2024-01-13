import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "start a search" },
    { path: "/my-job", title: "My jobs" },
    { path: "salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a job" },
  ];

  return (
    <header>
      <nav>
        <a href="/">NerdJob</a>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
