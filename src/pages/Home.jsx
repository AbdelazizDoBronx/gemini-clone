import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const Home = () => {
  return (
    <div className='flex w-full h-screen '>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Home