import React, { useState }  from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import Menu from './Menuanim';



export default function Navbar(props) {

    const navVariants = {
        hidden : {opacity : 0, y : '-100%'},
        visible : {opacity : 1, y : '0%'}
    }

  return (
    <div>
        <motion.nav
        className=''
            variants={navVariants}
            initial='hidden'
            animate = 'visible'
        >
            <div className="flex justify-between p-5 w-11/12 max-md:w-10/12 relative max-md:left-14">
            
            {props.focus === 'A propos' ? 
                <Menu/>
                :
                <div  className='text-3xl text-soft-white relative top-0 -left-20 hidden max-md:block'>
                    <FaIcons.FaChessKnight/>
                </div>

            }
                <h1 className=' cursor-pointer text-xl text-soft-red max-md:hidden'>Portfolio</h1>
                <ul className='flex gap-10 bg-light-black shadow-lg p-2 rounded-full text-sm z-20'>
                    <Link to={'/'}>
                        {props.focus === 'Home' ? <li className='cursor-pointer text-soft-red font-bold'>Home</li> : <li className='cursor-pointer hover:text-soft-red hover:font-bold'>Home</li>}
                    </Link>
                    <Link to={'/resume'} className=''>
                        {props.focus === 'A propos' ? <li className='cursor-pointer text-soft-red font-bold'>A propos</li> : <li className='cursor-pointer hover:font-bold hover:text-soft-red'>A propos</li>}
                    </Link>
                </ul>
                <button className='bg-light-black p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer z-20'>
                    <FaIcons.FaSun/>
                </button>
            </div>
        </motion.nav>
    </div>
  )
}
