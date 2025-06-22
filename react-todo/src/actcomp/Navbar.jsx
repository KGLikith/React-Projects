import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-yellow-500 items-center flex justify-between py-4 px-8 '>
      <h1 className='text-4xl text-white font-mono font-normal  '>Keeper</h1>
      <ul  className='flex items-center p-3 text-xl gap-10 justify-end '>
        <li className='cursor-pointer'><a href="/">Home</a></li>
        <li className='cursor-pointer'><a href="/about">About</a></li>
        <li className='cursor-pointer'> <a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
