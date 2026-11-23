import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircle } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'
import UploadBooks from '../Components/UploadBooks'

function Profile() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'>
      </div>
      <div style={{ height: '230px', width: '230px', borderRadius: "50%", marginLeft: '75px', marginTop: '-130px' }} className='bg-white p-4'>
        <img style={{ height: '200px', width: '200px', borderRadius: "50%" }} src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" alt="" />
      </div>
      <div className='flex justify-between px-20 mt-3'>
        <div className='flex items-center '>
          <h1 className='font-bold md:texl-3xl text-2xl'>USERNAME</h1>
          <FaCircleCheck className='text-blue-500 ms-3' />
        </div>
       <Edit />

      </div>
      <p className='text-xl font-bold px-20 mt-5'>Bio</p>
      <p className='text-justify md:px-20 '>A passionate book lover who believes that every book holds a new adventure, a fresh perspective, and a world waiting to be explored. I enjoy discovering inspiring stories, exploring different genres, and sharing the joy of reading with others. For me, books are more than just pages and words – they are a gateway to imagination, knowledge, and endless possibilities. </p>

      <div className='flex justify-center items-center my-8 font-bold texl-lg '>
        <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b  rounded cursor-pointer'}>Upload Book</p>
        <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b  rounded cursor-pointer'}>Uploads Book Status</p>
        <p onClick={() => setCurrentTab(3)} className={currentTab == 3 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b  rounded cursor-pointer'}> Purchase History</p>
      </div>
      {currentTab == 1 && <div><UploadBooks /></div>}
      {currentTab == 2 && <div>Upload Books Status</div>}
      {currentTab == 3 && <div>Purchase History</div>}




      <Footer />
    </>
  )
}

export default Profile
