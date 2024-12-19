import { CodeXml, Compass, Lightbulb, MessageSquare } from 'lucide-react'
import React from 'react'

function Greetings() {
  return (
    <div>
        <div>
            <h2 className='text-5xl font-semibold'>Hello, Abdelaziz.</h2>
            <p className='text-3xl text-neutral-400 mt-2 text-pretty'>How can i help you today?</p>
        </div>
        <div className='flex gap-3 my-5'>
            <div className=" p-5 h-32 bg-slate-100 rounded-lg text-pretty flex flex-col justify-between text-sm ">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <span className='flex justify-end w-full '><Compass/></span>
            </div>
            <div className=" p-5 h-32 bg-slate-100 rounded-lg text-pretty flex flex-col justify-between text-sm ">
                <p>Briefly summarize this concept: urban planning</p>
                    <span className='flex justify-end w-full '><Lightbulb/></span>
            </div>
            <div className=" p-5 h-32 bg-slate-100 rounded-lg text-pretty flex flex-col justify-between text-sm ">
                <p>Brainstorm team bonding activities for our work retreat</p>
                    <span className='flex justify-end w-full '><MessageSquare/></span>
            </div>
            <div className=" p-5 h-32 bg-slate-100 rounded-lg text-pretty flex flex-col justify-between text-sm ">
                <p>Tell me about React js and React native</p>
                    <span className='flex justify-end w-full '><CodeXml/></span>
            </div>
        </div>
    </div>
  )
}

export default Greetings