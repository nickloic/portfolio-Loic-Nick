import React from 'react'
import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../datas/skilsData'
import { useState } from 'react'
import { hover } from '@testing-library/user-event/dist/hover'
import Sidebar from '../components/Sidebar'
import Arc from '../components/Cercle'
import { MenuToggle } from '../components/Menutoggle'
import Menu from '../components/Menuanim'
import { useRef } from "react";


export default function Skills() {

  const variancontainer = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const varianitem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
  }

  const [selectedId, setSelectedId] = useState(null)
  const constraintsRef = useRef(null);

  return (
    <div className='text-white font-monospace max-sm:h-screen bg-soft-black flex flex-col justify-between items-center'>
      <div ref={constraintsRef} className=' max-sm:h-fit w-9/12 max-lg:w-7/12 max-md:w-full bg-soft-black p-5 h-screen'>
        <Navbar focus='A propos' />
        <Sidebar focus='Skills' />
        {/* <Menu/> */}
        <div>
          <h1 className='text-4xl font-bold max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>
            Pourquoi me choisir ?{' '}
          </h1>
          <span className=''>
            Je suis un professionnel adaptable et rapide à apprendre, maîtrisant diverses technologies avec aisance.</span>
        </div>
        <motion.div className='grid grid-cols-5 pt-9 max-sm:grid-cols-2 max-lg:grid-cols-3 gap-3 max-sm:gap-1 relative top-28 max-sm:top-5'
          variants={variancontainer}
          initial='hidden'
          animate='visible'
        >
          {skills.map((val, id) => (
            <motion.div key={id} layoutId={id} onClick={() => { setSelectedId(id) }} className='w-40 h-20 max-sm:w-full bg-light-black hover:bg-soft-red transition-colors rounded-lg flex flex-col justify-center items-center cursor-pointer'
              variants={varianitem}
            >
              <div className=' object-contain text-5xl opacity-70'>
                {val.path}
              </div>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId} className='max-sm:w-full max-sm:left-0 p-3 shadow-2xl bg-light-black absolute w-1/2 h-80 left-1/4 top-1/4 rounded-xl flex flex-col gap-2 justify-center items-center'>
                <motion.div className='object-contain opacity-70 text-8xl'>
                  {skills[selectedId].path}
                </motion.div>
                <motion.h2> {skills[selectedId].nom} </motion.h2>
                <p className='pt-2'>{skills[selectedId].desc}</p>
                <motion.button className='bg-red-300 hover:bg-red-400 text-soft-red relative top- w-7 h-7 flex justify-center items-center rounded-full p-1 -right-2/4 -top-2/3' onClick={() => setSelectedId(null)}>x</motion.button>
                <h1>Comprehention : </h1>
                <Arc percentage={skills[selectedId].comprehension} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
