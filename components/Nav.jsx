'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Fade as Hamburger } from 'hamburger-react'

const Nav = () => {

  // for navigation responsive 
  const [toggleDrop, setToggleDrop] = useState(false);

  return (
    <nav className='flex justify-between items-center bg-[#2E3090] p-3 px-20'>
      <Link
        href='/'
      >
        <p className='text-white text-[30px]'>Logo</p>
      </Link>

      {/* Desktop Nav */}
      <div className='sm:flex hidden'>
        <div className='font flex gap-6'>
          <Link
            className='text-white text-2xl'
            href="/farm"
          >
            Farm
          </Link>
          <Link
            className='text-white text-2xl'
            href="/farm"
          >
            Products
          </Link>
          <Link
            className='text-white text-2xl'
            href="/farm"
          >
            About
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className='hidden md:flex'>
        <div className='flex'>
          {toggleDrop && (
            <div className=''>
              <Hamburger toggled={toggleDrop} toggle={setToggleDrop} direction="right" duration={0.8} />
              <Link href="/contact">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav