import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAlignRight, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a job" },
    // { path: "/", title: "Home Page" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
      <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
               <span style={{ color: '#00AEAD' }}>Jo</span>
               <span style={{ color: '#00AEAD', borderBottom: '2px solid black' }}>b</span>
               <span style={{ color: 'black' , borderBottom: '2px solid #00AEAD' }}>L</span>
               <span style={{ color: 'black' }}>inker</span>
          </span>

      </Link>
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive}) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/*sign up & login btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">Login</Link>
          <Link to="/sign-up" className="py-2 px-5 border rounded text-white hover:bg-opacity-90" 
            style={{ backgroundColor: "#00AEAD"}}>Sign Up</Link>
        </div>
        {/*hamburger menu for mobile*/}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {
              isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaAlignRight className="w-5 h-5 text-primary"/>

            }
          </button>
        </div>
      </nav>

      {/*navitems for mobile menu*/}
      <div className={`px-4 py-5 rounded-sm ${isMenuOpen ? '' : 'hidden'}`} style={{ backgroundColor: '#00AEAD' }}>
          <ul>
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-white first:text-white py-1">
                <NavLink
                  to={path}
                  className="text-base text-primary"
                  onClick={handleMenuToggler}
                >
                  {title}
                </NavLink>
              </li>
            ))}

            <li className="text-white py-1">
              <Link to="/login" onClick={handleMenuToggler}>Login</Link>
            </li>
          </ul>
      </div>
    </header>
  );
};

export default Navbar;
