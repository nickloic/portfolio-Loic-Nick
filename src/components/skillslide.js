import { useState } from "react";
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { MdOpacity } from "react-icons/md";
import * as FaIcons from 'react-icons/fa'
import { skills } from "../datas/skilsData";



export default function Skillslide() {

const updateIndex = (index, direction) => {
  return (index + direction + skills.length) % skills.length;
}
// const [i, seti] = useState(1);
const [pos, setpos] = useState(1);
const [positionIndex, setpositionIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const handlenext = () => {
  setpositionIndex((previd) => {
    const updateid = previd.map((previdex) => ((previdex + 1) % 10))
    return updateid
  })
  
  setpos(updateIndex(pos, -1))
  // seti(i - 1)
  if (pos < 0) {
    setpos(11)
  }
  
}
  const position = [
    'right',
    'center',
    'left',
    'left2',
    'right2',
    'right2',
    'right2',
    'right2',
    'right2',
    'right2',
    'right2',
    'right2',
    'right2',
    'right2',
  ]
  const imageVariant = {
    center: {x: '0%', scale: 0.8, zIndex: 5},
    left: {x: '-70%', scale: 0.5, zIndex: 0, opacity: 0.3},
    left2: {x: '-150%', scale: 0.5, zIndex: 2, opacity: 0},
    right: {x: '70%', scale: 0.5, zIndex: 2, opacity: 0.3},
    right2: {x: '150%', scale: 0.3, zIndex: 0, opacity: 0}
  }

  return (
    <div className='h-44 flex w-96 justify-center items-center flex-col gap-1 max-lg:relative max-lg:left-2/4 max-md:left-1/4 max-sm:w-full max-sm:-left-5'>
      <h1 className='text-center font-bold text-xl relative -top-16'>
        SKILLS
      </h1>
      {skills.map((img, id) => (
        <motion.div
          
          key={id}
          className="xl:p-20 max-md:p-10 max-lg:p-10 text-7xl max-sm:p-4 object-contain"
          initial = 'center'
          animate = {position[positionIndex[id]]}
          variants={imageVariant}
          transition={{duration: 0.5}}
          style={{width: '40%', position: 'absolute'}}
        >
          {img.path}
        </motion.div>
      ))}
      <h1 className="text-center font-bold text-xl relative top-20 mb-5">{skills[pos].nom}</h1>
      <button type='button' className='opacity-30 hover:opacity-80 relative left-60 -top-10 max-lg:left-44 max-sm:left-36 z-10' onClick={handlenext}><FaIcons.FaArrowAltCircleRight size={32} /></button>
    </div>
  )
}
