import React from 'react'
import './loading.css'
const Loading = () => {
  return (
    <div className='flex flex-col gap-1 my-5'>
        <hr className='loaderHr bg-gradient-to-r from-purple-300 to-purple-100 rounded-md w-[700px] h-4 '/>
        <hr className='loaderHr bg-gradient-to-r from-purple-300 to-purple-100 rounded-md w-[700px] h-4 '/>
        <hr className='loaderHr bg-gradient-to-r from-purple-300 to-purple-100 rounded-md w-[700px] h-4 '/>
    </div>
  )
}

export default Loading