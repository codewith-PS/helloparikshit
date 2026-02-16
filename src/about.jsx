import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './App.css'
import { MdDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";


export default function about() {
    return (
        <>
            <section className="min-h-screen font-serif flex flex-col mt-4 md:flex-row justify-around items-center text-white px-4" style={{ backgroundColor: '#140C22'}}>
                <div className="text-start flex flex-col gap-4 justify-around md:text-left w-full md:w-[700px] h-90 p-6 rounded-md">
                    <h2 className="text-2xl">
                        <span className="text-neutral-200">
                            <Typewriter
                                words={['Hello World </>', 'I am Parikshit']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={60}
                                delaySpeed={1600}
                            />
                        </span>
                    </h2>
                    <p className='font-semibold text-5xl bg-gradient-to-r from-purple-500 via-fuchsia-200 to-fuchsia-700 text-transparent bg-clip-text' style={{ fontFamily: 'serif', fontWeight: 'normal' }}>Full Stack</p>
                    <p className='font-semibold text-5xl bg-gradient-to-r from-purple-500 via-fuchsia-200 to-fuchsia-700 text-transparent bg-clip-text' style={{ fontFamily: 'serif', fontWeight: 'normal' }}>Web Developer</p>
                    <p className='text-2xl'>I simplify complex user experience challenges to craft thoughtful, scalable solutions that reach millions driving engagement and lasting impact.</p>
                    <div className=' flex justify-start sm:flex-row items-center gap-4'>
                        <button style={{ border: '2px solid #AE4BFF', cursor: "pointer", color: '#AE4BFF', borderRadius: '50px', width: 'max-content', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', padding: '8px 15px' }}><a href="/parikshit CV.pdf">Download CV </a><MdDownload size={20}/></button>
                        <div className='flex gap-2'>
                            <a href='#' className='shake'><FaLinkedin size={36} style={{ border: '2px solid #AE4BFF', padding: '5px 0px', borderRadius: '50px' }} /></a>
                            <a href='#' className='shake'><SiGithub size={36} style={{ border: '2px solid #AE4BFF', padding: '5px 0px', borderRadius: '50px' }} /></a>
                            <a href='#' className='shake'><FaInstagram size={36} style={{ border: '2px solid #AE4BFF', padding: '5px 0px', borderRadius: '50px' }} /></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center text-center md:text-left w-full md:w-[700px] relative'>
                    <svg className='shake' width="450" height="500" xmlns="public/svg-path (1).svg">
                        <path d="M 3 10 L 3 10 C 3 1 19 3 22 9 S 19 29 13 29 Q 3 26 3 10" transform="scale(17)" fill="#330A50" stroke-width='0.2' stroke='#B941FF'/>
                    </svg>
                        <img src='IMG_20250818_120825.png' width={368} height={200} alt='image' className="shake absolute z-10" style={{top:'-50px'}}/>
                </div>
            </section>
        </>
    )
}
