import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Arc from '../components/Cercle'


export default function Parcour() {
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white font-monospace'>
        <div className='p-5 bg-soft-black flex flex-col bg-cover w-9/12 h-screen gap-y-5 max-sm:w-full'>
        <Navbar focus='A propos'/>
        <Sidebar focus = 'Parcour'/>
        ok
        </div>
    </div>
  )
}
