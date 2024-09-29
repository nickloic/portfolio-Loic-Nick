import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import * as FaIcons from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import Skillslide, { Example } from '../components/skillslide'
import { motion, AnimatePresence } from "framer-motion";

export default function Acceuil() {

    const titleVariant = {
        hidden: { opacity: 0, x: '-100%' },
        visible: { opacity: 1, x: '0%' }
    }
    const imgVariant = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: '0%' }
    }


    return (
        <div className='flex flex-col justify-center items-center bg-black text-white font-monospace'>
            <div className=" p-5 bg-soft-black flex flex-col bg-cover w-9/12 h-screen gap-y-5 max-sm:w-full">
                <Navbar focus='Home' />
                <div className=' w-full h-fit flex flex-col gap-3 z-10'>
                    <motion.div
                        className='flex flex-col gap-3 max-sm:relative max-sm:top-3'
                        variants={titleVariant}
                        initial='hidden'
                        animate='visible'
                    >
                        <img src='/images/profil.jpg' className='w-20 h-20 rounded-full object-cover' />
                        <h1 className='text-4xl font-bold max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>
                            Hi! Je suis <span className='text-soft-red'>Nick Loïc</span>
                            <br/>
                            <span className='text-soft-red font-thin'>
                                <Typewriter
                                    words={['FontEnd', 'BackEnd', 'Web', 'Mobile']}
                                    loop={false}
                                    cursor
                                    cursorStyle = '/>'
                                />
                            </span>
                        </h1>
                        <p className='z-20 relative'>
                            Devellopeur FrontEnd et BackEnd, Camerounais <br />
                            Passioné de programation et de design
                        </p>
                        <div className='flex gap-5 text-2xl opacity-70'>
                            <a href='https://github.com/nickloic/' target='blank'>
                                <FaIcons.FaGithub />
                            </a>
                            <a href='https://x.com/Nicktipma/' target='blank'>
                                <FaIcons.FaTwitter />
                            </a>
                            <a href='https://wa.me/698633761' target='blank'>
                                <FaIcons.FaWhatsapp />
                            </a>
                            <a href='mailto:nicktipma22@gmail.com' target=''>
                                <FaIcons.FaEnvelope />
                            </a>
                            <a href='tel:+237698633761'>
                                <FaIcons.FaPhone />
                            </a>
                        </div>
                    </motion.div>

                    {/* <motion.img src='images/nouveau.png' className='rounded-full opacity-100 fixed right-36 w-2/6 -z-10 max-lg:hidden max-sm:hidden'
                        variants={imgVariant}
                        initial='hidden'
                        animate='visible'
                    /> */}

                    <motion.svg
                    className= ' w-full fixed left-1/3 h-full hidden max-lg:block'
                        fill= 'transparent'
                    >
                        <motion.circle
                            className='relative z-40'
                            cx='200'
                            cy='250'
                            r='100'
                            stroke='red'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            initial = {{strokeDasharray : '24 10 0 0'}}
                            animate = {{
                                strokeDasharray : ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                                rotate : [120, 360]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }}
                        />
                    </motion.svg>
                    <motion.svg
                    className= ' w-2/6 fixed right-36 h-full max-lg:hidden'
                        fill= 'transparent'
                    >
                        <motion.circle
                            className='relative z-40'
                            cx='256'
                            cy='257'
                            r='250'
                            stroke='#cc1e28'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            initial = {{strokeDasharray : '24 10 0 0'}}
                            animate = {{
                                strokeDasharray : ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                                rotate : [120, 360]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }}
                        />
                    </motion.svg>
                    <div className=' w-6/12 max-sm:w-11/12 max-sm:left-3 p-5 gap-5 flex flex-col relative top-12 z-0 max-sm:top-28'>
                        <Skillslide />
                    </div>
                </div>
            </div>
           
        </div>
    )
}
