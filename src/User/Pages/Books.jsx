import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle,settoggle] = useState(false)
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div className='my-5'>
          <input type="text" className='border border-gray-300 w-100 p-2 rounded' placeholder='Search by book title' />
          <button className='bg-blue-800 text-white p-2 ms-2 rounded'>Search</button>
        </div>
      </div>
      {/* Grid Filter and books card */}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
        {/* filter */}
        <div className='col-span-1'>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>Filter</h1>
            <button onClick={()=> settoggle(!toggle)} className='text-2xl md:hidden'><FaBars /></button>
          </div>
          {/* Filter category */}
          <div className={toggle? 'block' : 'hidden md:block'}>
            <div className='mt-3'>
              <input name='filtering' type="radio" id='no-filter' />
              <label className='ms-2' htmlFor="no-filter">All</label>
            </div>
            {/* dulipcate filter category */}
            <div className='mt-3'>
              <input name='filtering' type="radio" id='filter' />
              <label className='ms-2' htmlFor="filter">Category</label>
            </div>
          </div>
        </div>
        {/* Book card */}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5'>
            {/* Duplicate according to the book */}
            <div className='shadow rponded p-3 m-4'>
              <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78FBdMofBwVSDyus7mzcx3Xf-y2A0yyMX_8N5hcQIvFvY1OHuGtL7by66&s=10" alt="BookCard" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                <h3 className='mt-2 text-xl'>Title</h3>
                <Link to={'/books/:id'} className='bg-blue-800 text-white p-2 rounded mt-2 font-bold'>View Book</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Books
