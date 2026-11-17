import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10'>
      {/* About us */}
      <div>
        <h1 className='font-bold'>ABOUT US</h1>
        <p className='mt-5 text-justify'>We belive books are the more tghan just pages - they are windows into new worlds ,teacher of wishes,and compains fore life. Our journey begin with a passion for storyteeling and a mission to makeb reading accessible,enjiyable and inspring gor everyone...</p>
      </div>
      {/* News Letter */}
      <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>NEWS LETTER</h4>
        <p className='my-5'>Stay updated with our latest trends</p>
        <div className='flex text-lg'>
          <input type="text" placeholder='E-Mail' className='border bg-white text-black p-1' />
          <button className='bg-yellow-500 p-2'><FaArrowRight/></button>
        </div>
      </div>

      {/* Follow section */}
        <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>FOLLOW US</h4>
        <p className='my-5'>Let us be social</p>
        <div className='flex text-lg'>
         <FaFacebook/>
         <FaInstagram className='mx-5'/>
         <FaSquareTwitter/>
         <FaEnvelope className='mx-5'/>
        </div>
      </div>

    </div>
     
    </>
  )
}

export default Footer
