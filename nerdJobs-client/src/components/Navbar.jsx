import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuToggler = () =>{
        setMenuOpen(!isMenuOpen)
    }
  return (
    <header>
        <nav>
            <a href="/">NerdJob</a>
        </nav>
    </header>
  )
}

export default Navbar