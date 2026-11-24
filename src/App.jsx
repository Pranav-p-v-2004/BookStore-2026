import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Contact from './User/Pages/Contact'
import Books from './User/Pages/Books'
import Auth from './Pages/Auth'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResourse from './Admin/Pages/AdminResourse'
import { useState } from 'react'
import Preloader from './Components/Preloader'
import PageNotFound from './Pages/PageNotFound'
import AdminSetting from './Admin/Pages/AdminSetting'


function App() {
  const [isLoiading,setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000);
  return (
    <>
      <Routes>
        <Route path='/' element={isLoiading ? <Preloader/> : <Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />


        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<View />} />

        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/resources' element={<AdminResourse />} />
        <Route path='/admin/settings' element={<AdminSetting />} />
         <Route path='/*' element={<PageNotFound />} />


      </Routes>

    </>
  )
}

export default App
