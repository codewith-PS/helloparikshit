import React from 'react'
import './App.css'
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function project() {
    return (
        <>
            <section id="Projects" className=" h-screen p-12 pt-45 gap-20 flex flex-wrap justify-center items-center text-white relative" style={{ backgroundColor: 'black', height: 'max-content' }}>
                <p className='font-semibold absolute top-20 text-4xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-fuchsia-700 text-transparent bg-clip-text' id='fset' style={{ fontFamily: 'serif' }}>Projects</p>
                <div data-aos="fade-up" className="clgg flex flex-col gap-10 justify-between text-center md:text-left w-full md:w-[340px] h-95 p-5 relative" style={{ borderRadius: '20px', fontFamily: 'cursive', alignItems: 'center' }}>
                    <div className='w-full flex justify-end'><a href='https://github.com/codewith-PS/keepnotesbyps'><FaGithub size={35} /></a>&nbsp;&nbsp;<a href='https://keepnotesbyps.vercel.app/'><BsArrowUpRightCircle size={35}/></a></div>
                    <div className=' text-4xl'>Keep Notes</div>
                    <div className='text-2xl' style={{ fontFamily: 'serif', textAlign: 'center' }}>Html CSS JavaScript React.js AOS Node.js Express.js Api's MongoDB </div>
                </div>
                <div data-aos="fade-up" className='clgg flex flex-col gap-10 justify-between text-center md:text-left w-full md:w-[340px] bg-amber-300 h-95 p-5 relative' style={{ borderRadius: '20px', fontFamily: 'cursive', alignItems: 'center' }}>
                    <div className='w-full flex justify-end'><a href='https://github.com/codewith-PS/foodfactionbyps/tree/main/foodfaction'><FaGithub size={35} /></a></div>
                    <div className=' text-4xl'>Food Faction</div>
                    <div className='text-2xl' style={{ fontFamily: 'serif', textAlign: 'center' }}>Html CSS TailwindCSS JavaScript React.js PHP Api's MySQL </div>
                </div>
                <div data-aos="fade-up" className='clgg flex flex-col gap-10 justify-between text-center md:text-left w-full md:w-[340px] bg-amber-300 h-95  p-5 relative' style={{ borderRadius: '20px', fontFamily: 'cursive', alignItems: 'center' }}>
                    <div className='w-full flex justify-end'><a href='https://github.com/codewith-PS/Key-Logger'><FaGithub size={35} /></a>&nbsp;&nbsp;<a href='https://keyloggerdevelopbyps.netlify.app/'><BsArrowUpRightCircle size={35}/></a></div>
                    <div className=' text-4xl'>Key Logger</div>
                    <div className='text-2xl' style={{ fontFamily: 'serif', textAlign: 'center' }}>Html CSS TailwindCSS JavaScript JQuery AOS Bootstraph</div>
                </div>
                <div data-aos="fade-up" className='clgg flex flex-col gap-10 justify-between text-center md:text-left w-full md:w-[340px] bg-amber-300 h-95  p-5 relative' style={{ borderRadius: '20px', fontFamily: 'cursive', alignItems: 'center' }}>
                    <div className='w-full flex justify-end'><a href='https://github.com/codewith-PS/QR-Code-Generator'><FaGithub size={35} /></a>&nbsp;&nbsp;<a href='https://qrcodegeneratorps.netlify.app/'><BsArrowUpRightCircle size={35}/></a></div>
                    <div className=' text-4xl'>QR-Generator</div>
                    <div className='text-2xl' style={{ fontFamily: 'serif', textAlign: 'center' }}>Html CSS TailwindCSS Javascript JQuery AOS QR Api's</div>
                </div>
                <div data-aos="fade-up" className='clgg flex flex-col gap-10 justify-between text-center md:text-left w-full md:w-[340px] bg-amber-300 h-95  p-5 relative' style={{ borderRadius: '20px', fontFamily: 'cursive', alignItems: 'center' }}>
                    <div className='w-full flex justify-end'><a href='https://github.com/codewith-PS/Digital-Clock'><FaGithub size={35} /></a>&nbsp;&nbsp;<a href='https://digiclockdevelopbyps.netlify.app/'><BsArrowUpRightCircle size={35}/></a></div>
                    <div className=' text-4xl'>Digi-Clock</div>
                    <div className='text-2xl' style={{ fontFamily: 'serif', textAlign: 'center' }}>Html CSS Tailwindcss Javascript </div>
                </div>
                <div data-aos="fade-up" className='clgg flex flex-col gap-10 justify-between text-center md:text-left w-full md:w-[340px] bg-amber-300 h-95  p-5 relative' style={{ borderRadius: '20px', fontFamily: 'cursive', alignItems: 'center' }}>
                    <div className='w-full flex justify-end'><a href='https://github.com/codewith-PS/calculator'><FaGithub size={35} /></a>&nbsp;&nbsp;<a href='https://calculatordevelopbyps.netlify.app/'><BsArrowUpRightCircle size={35}/></a></div>
                    <div className=' text-4xl'>Calculator</div>
                    <div className='text-2xl' style={{ fontFamily: 'serif', textAlign: 'center' }}>Html Css Javascript Bootstraph</div>
                </div>
            </section>
            <section id='bottom' className='mb-0 justify-center'>
                <div className='w-full h-15 flex justify-center' style={{ alignItems: 'center', textAlign: 'center', backgroundColor: '#170E27', color: 'white', fontFamily: 'serif' }}>
                    Copyright © www.parikshit.com all rights are reserved!!!
                </div>
            </section>
        </>
    )
}
