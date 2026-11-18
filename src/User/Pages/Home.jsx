import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div style={{ height: "700px" }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover text-white'>
        <div style={{ height: "700px", backgroundColor: "rgba(0,0,0,0.6)" }} className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold'>Wonderful Gifts</h1>
          <p className='p-2'>Gifts your family and friends a book</p>
          <div className='mt-9 flex items-center'>
            <input type="text" placeholder='Search a book' className='bg-white text-black rounded-3xl w-100 p-2' />
            <FaSearch className='text-gray-500 cursor-pointer' style={{ marginLeft: "-40px" }} />
          </div>
        </div>
      </div>
      {/* New arrivals */}

      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
        <h1 className='text-4xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-4xl my-5'>Explore Our Latest Collection</h1>
        <div className='md:grid grid-cols-4 w-full my-10'>

          {/* Duplicate accordinf to the image */}

          <div className='shadow rounded p-3 m-1 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78FBdMofBwVSDyus7mzcx3Xf-y2A0yyMX_8N5hcQIvFvY1OHuGtL7by66&s=10" alt="" />
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-blue-700 font-bold text-1xl'>Author</h2>
              <h3 className='text-lg font-bold'>Title</h3>
              <p className='font-bold text-red-700'>$Price</p>
            </div>
          </div>
        </div>
        <div className='my-10'>
          <Link to={'/books'} className='bg-[#17251D] text-white rounded p-3'>Explore More ..</Link>
        </div>
      </section>

      {/* Author */}

      <section className='md:grid grid-cols-2 item-center gap-10 p-5 my-5 md:px-40 '>
        <div className='text-center'>
          <h2 className='font-bold text-xl'>FEATURED AUTHORS</h2>
          <h3 className='text-xl my-2'>Captivates with every word</h3>
          <p className='text-justify my-5'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
          <p className='text-justify'>Our Author Features include:</p>
          <p className='text-justify my-4'> <span className='font-bold'>Author Profiles : </span>Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
          <p className='text-justify my-4'><span className='font-bold'>Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
          <p className='text-justify my-4'><span className='font-bold'>Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>

        </div>
        <div className='p-5 mt-10 ms-8 '>
          <img src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="" />
        </div>

      </section>


      {/* Testimonials */}

      <section className='flex flex-col justify-center items-center p-5 my-10 md:px-40'>
        <h1 className='text-2xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-2xl my-5'>See What Other's Are Saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
          <h3 className='my-5'>Luthur King</h3>
          <p className='text-justify'>Finding a bookstore that offers a wonderful collection of books at affordable prices is always a pleasure, and this website has exceeded my expectations. From best-selling novels to educational books and inspiring stories, the collection is impressive and well-organized. The website is easy to navigate, making it simple to discover new books and find exactly what I am looking for. The ordering process is smooth..</p>
        </div>
      </section>




      <Footer />
    </>
  )
}

export default Home