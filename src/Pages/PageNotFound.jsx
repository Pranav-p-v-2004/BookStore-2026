import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img className='w-150' src="https://miro.medium.com/v2/resize:fit:1400/0*h-HdveuCxbTYOHzV.gif" alt="pageNotFound" />
      <p className='text-xl'>Oh No!</p>
      <h1 className='text-2xl font-medium'>Look Like You're Lost</h1>
      <p>The page you are looking for is not available</p>
      <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded hover:bg-white hover:text-black'>Home</Link>
   
    </div>
  )
}

export default PageNotFound
