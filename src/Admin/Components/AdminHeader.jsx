import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
     {/* Header top */}
     {/* Logo */}
     <div className='flex justify-between items-center p-3 md:px-20'>
        <div className='flex items-center'>
          <img className='me-3' width={'50px'} src="https://png.pngtree.com/png-clipart/20250612/original/pngtree-opened-book-isolated-on-transparent-background-png-image_21186644.png" alt="no image" />
          <h1 className='text-2xl ms-3 font-bold'>BookStore</h1>
        </div>
        {/* Logout */}
        <button className='bg-black text-white px-3 py-2 rounded flex items-center hover:bg-white hover:text-black border font-bold '>Logout <FaPowerOff className='ms-2' /></button>
     </div>
     {/* Header marquee*/}
     <div className='bg-black text-white p-2 '>
      <marquee direction="left" scrollamount="5">
      Welcome Admin, Your all set to manage and monitor the system. Let's get into work!!
      </marquee>
     </div>
    </>
  )
}

export default AdminHeader
