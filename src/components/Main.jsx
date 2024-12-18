import { ImageUp, Mic, SendHorizontal } from 'lucide-react'
import React from 'react'
import Loading from './Loading';

const Main = () => {
    const data = false;
  return (
    <div className='w-full p-3 flex flex-col'>
        <div className=' flex w-full justify-between items-center'>
            <p className='text-neutral-600 text-2xl font-semibold tracking-wide'>Gemini</p>
            <img className='size-10 rounded-full object-cover ' src='https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' alt='img'/>
        </div>
        <div className='flex gap-5 items-center my-10'>
            <img className='size-10 rounded-full object-cover ' src='https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' alt='img'/>
            <p className='font-medium'>Suggest beautiful places to see on an upcoming road trip</p>
        </div>
        {/* skeloton */}
        {!data && <Loading/>}
        <div className='relative my-auto'>
            <input className='  w-full p-3 focus:outline-none rounded-xl shadow-md ' type='text' placeholder='Enter a prompt here'/>
            <Mic className='absolute top-1/4 right-20'/>
            <ImageUp className='absolute top-1/4 right-12'/>
            <SendHorizontal className='absolute top-1/4 right-4'/>
        <p className='text-pretty text-center text-neutral-500  text-sm my-3'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
    </div>
  )
}

export default Main