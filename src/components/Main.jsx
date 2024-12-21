import { Bot, ImageUp, Mic, SendHorizontal } from 'lucide-react'
import React, { useContext, useState } from 'react'
import Greetings from './Greetings';
import Loading from './Loading'
import { Context } from '../redux/context';

const Main = () => {
    const {input,setInput,sendData,loading,showData,recentPrompt,responseData} = useContext(Context);
    
    
    

    
    
  return (
    <div className='max-w-[1200px] mx-auto p-5 flex flex-col'>
        <div className=' flex w-full justify-between items-center my-5'>
            <p className='text-neutral-600 text-2xl font-semibold tracking-wide'>Gemini</p>
            <img className='size-10 rounded-full object-cover ' src='https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' alt='img'/>
        </div>
        {/* skeloton */}
        {!showData && <Greetings/>}
        <div className='interaction flex flex-col gap-3 my-auto'>
            <div className='flex gap-5 items-center'>
                <Bot />
                <h2>{recentPrompt}</h2>
            </div>
            {loading 
            ? <Loading/>            
            :<p dangerouslySetInnerHTML={{__html:responseData}} className='text-sm text-neutral-500 text-pretty '></p>}
        </div>
        <div className='relative my-auto'>
            <input className='w-full p-4 focus:outline-none rounded-xl shadow-md ' 
            type='text'
            placeholder='Enter a prompt here'
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            />
            <Mic className='absolute top-1/4 right-20'/>
            <ImageUp className='absolute top-1/4 right-12'/>
            <SendHorizontal  onClick={()=>sendData()} className='absolute top-1/4 right-4'/>
        <p className='text-pretty text-center text-neutral-500  text-sm my-3'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
    </div>
  )
}

export default Main