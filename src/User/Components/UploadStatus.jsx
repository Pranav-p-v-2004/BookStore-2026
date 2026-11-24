import React from 'react'

function UploadStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
        {/* Duplicate Book status */}
        <div className='bg-gray-100 rounded p-5 mt-4'>
       <div className='md:grid grid-cols-[3fr_1fr] '>
            {/* 1st section */}
            <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h1 className='text-xl'>Author</h1>
                <h1 className='text-lg text-blue-600'>$ Price</h1>
                <h1 className='text-xl font-bold mt-8'>Abstract :</h1>
                <div className='flex mt-8'>
                  <img width={'120px'} height={'120px'} src="https://img.pikbest.com/png-images/20260103/red-pending-stamp-on-white-background_14174851.jpg!bw700" alt="pending" />
                  <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/021/433/029/non_2x/sold-rubber-stamp-free-png.png" alt="sold" />
                  <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20250921/ourmid/pngtree-green-approved-stamp-png-image_17542466.webp" alt="approved" />
                
                </div>
            </div>
            {/* 2nd Section */}
            <div className='px-10 mt-10 md:mt-0'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78FBdMofBwVSDyus7mzcx3Xf-y2A0yyMX_8N5hcQIvFvY1OHuGtL7by66&s=10" alt="no image" />
                <div className='flex justify-end'>
                    <button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-5 hover:bg-white hover:text-red-600 '>DELETE</button>
                </div>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default UploadStatus
