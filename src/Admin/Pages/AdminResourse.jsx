import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* 1st Section 1 grid*/}
        <div className='col-span-1'>
          <AdminSidebar />

        </div>
        {/* 2nd Section 4 grid */}
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center my-10 '>All Resources</h1>
          <div className='flex justify-center items-center my-8 font-bold text-lg g-10'>
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-4 border-gray-200 border-l border-t border-r  rounded cursor-pointer' : 'p-4 border-gray-200 border-b  rounded cursor-pointer '}>Books</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-4 border-gray-200 border-l border-t border-r  rounded cursor-pointer' : 'p-4 border-gray-200 border-b  rounded cursor-pointer '}>Users</p>
          </div>
          {/* tab content */}
           {
           currentTab == 1 && 
            <div className='md:grid grid-cols-4 w-full my-10'>

          {/* Duplicate according to the image */}

          <div className='shadow rounded p-3 m-1 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78FBdMofBwVSDyus7mzcx3Xf-y2A0yyMX_8N5hcQIvFvY1OHuGtL7by66&s=10" alt="" />
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-blue-700 font-bold text-1xl'>Author</h2>
              <h3 className='text-lg font-bold'>Title</h3>
              <p className='font-bold text-red-700'>$Price</p>
              <button className='bg-green-600 text-white p-2 rounded w-full mt-3'>Approve</button>
            </div>
          </div>
        </div>
           }
           {
           currentTab == 2 &&
           <div className='md:grid grid-cols-3 w-full'>
            {/* Duplicate according to the user */}
            <div className='rounded bg-gray-200 p-2 m-2 '>
              <p className='text-red-500 font-bold text-base '>ID : </p>
              <div className='flex items-center '>
                <img  width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" alt="No image" />
                <div className='ms-5 flex flex-col w-full'>
                  <h4 className='text-blue-400 font-bold text-md'>Username</h4>
                  <p className='text-xs'>username@gmail.com</p>
                </div>
              </div>
             

            </div>
            
             </div>
           }

        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource