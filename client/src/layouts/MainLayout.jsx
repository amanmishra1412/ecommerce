import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
            <Header />
            <main className='w-full bg-[#FBF8EF]'>
                {<Outlet />}

            </main>
            <Footer />
    </>
  )
}

export default MainLayout