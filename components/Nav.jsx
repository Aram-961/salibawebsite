'use client'

import Link from "next/link";
import { useState } from "react"
// import { RiMenu2Fill } from 'react-icons/ri';


import { Cross as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!open)
  }

  return (

    // check why hamburgers are not showing when the navbar is opened

    <nav className="fixed bg-[#2E3090] p-5 z-40 w-full">
      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-between">
        <Link href="/home" className="text-white text-3xl">
          Logo
        </Link>
        <button onClick={handleMenuClick}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {/* Nav Links */}
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#2E3090] flex justify-center items-center z-30">
          <div className="flex flex-col gap-5 text-center">
            <Link
              href=""
              className="text-white text-xl"
              onClick={handleMenuClick}
            >
              Farm
            </Link>
            <Link
              href=""
              className="text-white text-xl"
              onClick={handleMenuClick}
            >
              About
            </Link>
            <Link
              href=""
              className="text-white text-xl"
              onClick={handleMenuClick}
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </nav>


  )
}

export default Navbar;