import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { sideItems } from '../datas/sidebardata'
import { Link } from 'react-router-dom'


export default function Sidebar(props) {

    const setfocus = (id) => {
        sideItems.forEach(el => {
            el.isfocus = false
        });
        sideItems[id].isfocus = true
        
    }


  return (
      <nav className='absolute left-0 p-3 w-48 max-md:hidden top-24'>
        <ul className=' flex flex-col gap-1'>
            {sideItems.map((val, id) => (
            <Link to={val.path} key={id}>
            {
            val.isfocus ?
                <li  onClick={() => {setfocus(id)}} className='bg-soft-red side flex text-sm gap-1 rounded-sm cursor-pointer items-center p-3'>
                {val.icon}
                {val.text}
                </li>
            : 
                <li  onClick={() => {setfocus(id)}} className='side flex text-sm gap-1 rounded-sm cursor-pointer items-center p-3'>
                {val.icon}
                {val.text}
                </li>
            }
            </Link>
            ))}
        </ul>
      </nav>
  )
}
