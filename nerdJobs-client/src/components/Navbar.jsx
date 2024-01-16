import React, { useState, NavLink } from "react";

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
          {navItems.map((path, title) => (
            <li key={path} className="text-base">
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
