import Link from 'next/link'
import React from 'react'

const Nav = () => {
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
            AboutU  s
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className='hidden'>
        <div>
          <div className='font flex gap-6'>
            <Link
              className='text-white text-2xl'
              href="/farm">
              Farm
            </Link>
            <Link
              className='text-white text-2xl'
              href="/farm">
              Products
            </Link>
            <Link
              className='text-white text-2xl'
              href="/farm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav