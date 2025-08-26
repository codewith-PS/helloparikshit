import React from 'react'
import Nav from './nav'
import './App.css'

export default function certificate() {
    return (
        <>
            <section id="Certificate" className=" h-screen pt-40 gap-10 flex flex-wrap justify-center items-center text-white relative" style={{ backgroundColor: '#170E26', height: 'max-content' }}>
                <p className='font-semibold absolute top-20 text-4xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-fuchsia-700 text-transparent bg-clip-text' id='fset' style={{ fontFamily: 'serif' }}>Certificates</p>
                <div data-aos="zoom-in" className="flex justify-center text-center md:text-left w-full md:w-[500px] h-90 p-6 relative">
                    <img src='certificate2.jpg' />
                </div>
                <div data-aos="zoom-in" className='flex justify-center text-center md:text-left w-full md:w-[500px] h-90 p-5 relative'>
                    <img src='certificate1.jpg' />
                </div>
                <div data-aos="zoom-in" className='flex justify-center text-center md:text-left w-full md:w-[500px]  h-90 p-10 relative'>
                    <img src='certificate3.jpg' />
                </div>
                <div data-aos="zoom-in" className='flex justify-center text-center md:text-left w-full md:w-[500px]  h-90 p-10 relative'>
                    <img src='certificate4.jpg' />
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
