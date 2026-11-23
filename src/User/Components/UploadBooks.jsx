import React from 'react'
import { BiBorderRadius } from 'react-icons/bi'

function UploadBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-50'>
        <h1 className='text-center text-2xl font-medium'>Upload Book Details</h1>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
            {/* 1st section */}
            <div className='px-5'>
            <div className='mb-3'>
                <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded' />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded' />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='Book Cover Image URL' className='w-full p-2 bg-white rounded' />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='Total Pages' className='w-full p-2 bg-white rounded' />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='Original Price' className='w-full p-2 bg-white rounded' />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded' />
            </div>
            <div className='mb-3'>
                <textarea type="text" rows={'5'} placeholder='Abstract' className='w-full p-2 bg-white rounded' />
            </div>
            
            </div>
          {/* 2nd section */}
          <div className='px-5'>
             <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded' />
            </div>
            {/* Upload images */}
            <div className='my-10 flex justify-center items-center'>
                <label htmlFor="bookImages" >
                    <input type="file" id='bookImages' hidden />
                    <img  width={'200px'} height={'200px'} style={{borderRadius:"50%"}} src="https://png.pngtree.com/png-clipart/20241003/original/pngtree-cloud-computing-icon-with-upload-and-arrows-3d-illustration-png-image_16189714.png " alt="noiamge" />
                </label>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default UploadBooks
