import React from 'react'
import { BiBorderRadius } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa'

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
                            <img width={'200px'} height={'200px'} style={{ borderRadius: "50%" }} src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-upload-cloud-vector-icon-png-image_1027251.jpg " alt="noiamge" />
                        </label>
                    </div>
                    {/* Preview upload image */}
                    <div className='flex justify-center items-center mb-3 me-30'>
                    <img width={'70px'} height={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78FBdMofBwVSDyus7mzcx3Xf-y2A0yyMX_8N5hcQIvFvY1OHuGtL7by66&s=10" alt="BookCard" />
                    <label htmlFor="bookUpload">
                        <input type="file" id='bookUpload' hidden />
                        <FaPlus className='text-2xl ms-3' />
                    </label>

                    </div>
                </div>
            </div>
            {/* Reset & Add Books */}
            <div className='flex md:justify-end mt-10 px-5  md:justify-center'>
                <button className='bg-gray-600 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-600'>RESET</button>
                <button className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-white hover:text-blue-600 ms-5'>ADD BOOK DETAILS</button>
            </div>

        </div>
    )
}

export default UploadBooks
