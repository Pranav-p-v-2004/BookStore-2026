import React, { useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaUser } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [toogle,setToogle] = useState(false)
  return (
    <>
    {/*  */}
    <div className='grid grid-cols-3 p-3'>
      {/* Logo */}
      <div className='flex items-center'>
        <img width={'40px'} src="https://png.pngtree.com/png-clipart/20250612/original/pngtree-opened-book-isolated-on-transparent-background-png-image_21186644.png" alt="no image" />
        <h1 className='text-2xl ms-3 font-bold md:hidden'>BookStore</h1>
      </div>
      {/* Title */}
      <div className='md:flex justify-center items-center hidden'>
        <h1 className='text-3xl font-bold'>BookStore</h1>
      </div>
      {/* Login */}
      <div className='md:flex items-center justify-end hidden'>
        <FaInstagram/>
        <FaSquareTwitter className='mx-2' />
        <FaFacebookSquare/>
        <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'><FaUser className='me-1'/>Login</Link>
      </div>

    </div>
    {/* Navigatiuon Part */}
    <nav className='bg-[#17251D] w-full text-white md:flex justify-center items-center p-2'>
      {/* Menu & Login At small screen */}
      <div className='flex justify-between items-center text-2xl md:hidden'>
        <button onClick={()=>setToogle(!toogle)}><FaBars /></button>
        <Link to={'/login'} className='text-lg flex justify-center items-center ms-5 border-black rounded px-3 py-2 hover:bg-black hover:text-white'><FaUser className='me-1'/>Login</Link>
      </div>
      <ul className={toogle? 'flex flex-col text-sm' : 'md:flex hidden'} >
        <li><Link to={'/'} className='md:mx-4 '>HOME</Link></li>
        <li><Link to={'/books'} className='md:mx-4'>BOOKS</Link></li>
        <li><Link to={'/contact'} className='md:mx-4'>CONTACT</Link></li>
      </ul>
    </nav>
     
    </>
  )
}

export default Header
