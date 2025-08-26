import { useState, useEffect } from 'react';
import Nav from './nav';
import './App.css';
import Certificate from './certificate';
import { Typewriter } from 'react-simple-typewriter';
import { MdDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { TfiMedall } from "react-icons/tfi";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function mid() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const [result, setResult] = useState("");

    const handleonSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c2b3572c-f9db-4bdf-8433-b244eaeff72d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <section id='home' className="min-h-screen pt-20 font-serif flex flex-col md:flex-row justify-around items-center text-white px-4" style={{ backgroundColor: '#140C22' }}>
                <div data-aos="fade-right" className="text-start flex flex-col gap-4 justify-around md:text-left w-full md:w-[700px] h-90 p-2 rounded-md">
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
                        <button style={{ border: '2px solid #AE4BFF', cursor: "pointer", color: '#AE4BFF', borderRadius: '50px', width: 'max-content', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', padding: '8px 15px' }}><a href="parikshit resume new....pdf">Download CV </a><MdDownload size={20} /></button>
                        <div className='flex gap-2'>
                            <a href='https://www.linkedin.com/in/parikshit-singh-aa8221268/' className='shake'><FaLinkedin size={36} style={{ border: '2px solid #AE4BFF', padding: '5px 0px', borderRadius: '50px' }} /></a>
                            <a href='https://github.com/codewith-PS' className='shake'><SiGithub size={36} style={{ border: '2px solid #AE4BFF', padding: '5px 0px', borderRadius: '50px' }} /></a>
                            <a href='#' className='shake'><FaInstagram size={36} style={{ border: '2px solid #AE4BFF', padding: '5px 0px', borderRadius: '50px' }} /></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center text-center md:text-left w-full md:w-[700px] relative overflow-hidden' style={{ paddingLeft: '-10px' }}>
                    <svg className='shake' style={{ marginLeft: '-20px' }} width="450" height="500" xmlns="public/svg-path (1).svg">
                        <path d="M 3 10 L 3 10 C 3 1 19 3 22 9 S 19 29 13 29 Q 3 26 3 10" transform="scale(17)" fill="#330A50" stroke-width='0.2' stroke='#B941FF' />
                    </svg>
                    <img src='IMG_20250818_120825.png' width={368} height={200} alt='image' className="shake absolute z-10" style={{ top: '-50px' }} />
                </div>
            </section>

            <section id="skills" className=" h-screen pt-40 flex flex-wrap justify-center items-center text-white relative" style={{ backgroundColor: '#170E26', height: 'max-content' }}>
                <p className='font-semibold absolute top-20 text-4xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-fuchsia-700 text-transparent bg-clip-text' id='fset' style={{ fontFamily: 'Montserrat' }}>Skills</p>
                <div data-aos="fade-right" className="flex flex-col relative justify-center md:text-left w-full md:w-[600px] h-90 p-10 rounded-md">
                    <img src='frontend-B1sSQ4Mm.png' width={380} />
                </div>
                <div data-aos="fade-left" className='flex justify-center text-center md:text-left w-full md:w-[600px]  h-90 p-8 relative'>
                    <img src='backend-BBdh7KHv.png' width={310} />
                </div>
                <div data-aos="fade-up" className='flex justify-center text-center md:text-left w-full md:w-[700px]  h-100 p-8 relative'>
                    <p className='font-semibold absolute top-10 text-4xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-fuchsia-700 text-transparent bg-clip-text' id="fset" style={{ fontFamily: 'Montserrat' }}>Tools</p>
                    <img src='Adobe Express - file.png' width={340} height={340} style={{ marginTop: '60px' }} />
                </div>
            </section>

            <section id="education" className=" h-screen pt-30 pb-10 flex flex-wrap gap-40 justify-center items-center text-white relative" style={{ backgroundColor: '#170E27', height: 'max-content' }}>
                <p className='font-semibold absolute top-20 text-4xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-fuchsia-500 text-transparent bg-clip-text' id='fset' style={{ fontFamily: 'Montserrat' }}>Education & Experience</p>
                <div data-aos="zoom-out-right" className="flex flex-col relative justify-center gap-6 md:text-left w-full md:w-[520px] h-140 p-6 rounded-md">
                    <div className='h-40 w-full flex text-4xl justify-center' style={{ fontFamily: 'Montserrat', alignItems: "center" }}><HiAcademicCap size={35} />&nbsp;<span className='bg-gradient-to-r from-purple-700 via-fuchsia-300 to-fuchsia-700 text-transparent bg-clip-text'>My Education</span></div>
                    <div className='h-[200px] w-full flex flex-col justify-evenly pl-4' style={{ backgroundColor: '#292137', fontFamily: 'initial', borderRadius: '10px' }}>
                        <p className='text-1xl' style={{ color: '#BB9AFF' }}>2025-Present</p>
                        <p className='text-2xl'>BCA (CSE)</p>
                        <p className='text-1xl'>Choudhary Charan Singh University</p>
                    </div>
                    <div className='h-[200px] w-full flex flex-col justify-evenly pl-4' style={{ backgroundColor: '#292137', fontFamily: 'initial', borderRadius: '10px' }}>
                        <p className='text-1xl' style={{ color: '#BB9AFF' }}>2022-2023</p>
                        <p className='text-2xl'>Class-XII (CBSE)</p>
                        <p className='text-1xl'>Modern National Public School</p>
                    </div>
                    <div className='h-[200px] w-full flex flex-col justify-evenly pl-4' style={{ backgroundColor: '#292137', fontFamily: 'initial', borderRadius: '10px' }}>
                        <p className='text-1xl' style={{ color: '#BB9AFF' }}>2020-2021</p>
                        <p className='text-2xl'>Class-XI (CBSE)</p>
                        <p className='text-1xl'>Ishwar Chand Inter College</p>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="flex flex-col relative justify-center gap-6 md:text-left w-full md:w-[520px] h-140 p-6 rounded-md overflow-hidden">
                    <div className='h-40 w-full flex text-4xl justify-center' style={{ fontFamily: 'Montserrat', alignItems: "center" }}><TfiMedall size={38} />&nbsp;<span className='bg-gradient-to-r from-purple-700 via-fuchsia-300 to-fuchsia-700 text-transparent bg-clip-text'>My Experience</span></div>
                    <div className='h-[200px] w-full flex flex-col justify-evenly pl-4' style={{ backgroundColor: '#292137', fontFamily: 'initial', borderRadius: '10px' }}>
                        <p className='text-1xl' style={{ color: '#BB9AFF' }}>Oct 2024-Dec 2024</p>
                        <p className='text-2xl'>Master-Tech Universe</p>
                        <p className='text-1xl'>Full Stack Developer (Intern)</p>
                    </div>
                    <div className='h-[200px] w-full flex flex-col justify-evenly pl-4' style={{ backgroundColor: '#292137', fontFamily: 'initial', borderRadius: '10px' }}>
                        <p className='text-1xl' style={{ color: '#BB9AFF' }}>Jan 2025-Aug 2025</p>
                        <p className='text-2xl'>Novaspire Digital Media Pvt Ltd</p>
                        <p className='text-1xl'>Full Stack Developer</p>
                    </div>
                    <div className='h-[200px] w-full flex flex-col justify-evenly pl-4' style={{ backgroundColor: 'transparent', fontFamily: 'initial', borderRadius: '10px' }}></div>
                </div>
            </section>

            {/* <section id="certificate" className="h-screen flex justify-center items-center text-white">
            <h1>Certificate Section</h1>
          </section> */}

            {/* <section id="projects" className="h-screen flex justify-center items-center text-white">
            <h1>Projects Section</h1>
          </section> */}

            <section id="contact" className="h-screen flex flex-wrap justify-evenly items-center gap-6 p-10 text-white" style={{ backgroundColor: "black", height: 'max-content' }}>
                <form
                    onSubmit={handleonSubmit}
                    data-aos="flip-left" data-aos-easing="ease-out-cubic"
                    className="flex flex-col relative justify-center gap-6 md:text-left w-full md:w-[620px] h-140 p-6 rounded-md"
                    style={{ alignItems: 'center', backgroundColor: '#140C22' }}
                >
                    <div className="h-[80px] w-full flex flex-col justify-center" style={{ alignItems: 'center' }}>
                        <p
                            className="font-semibold text-2xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-fuchsia-800 text-transparent bg-clip-text"
                            style={{ fontFamily: 'Montserrat' }}
                        >
                            Let’s work together!
                        </p>
                    </div>

                    <div className="h-[120px] w-full flex flex-col justify-between relative">
                        <div className="h-[120px] flex max:w-[680px] flex-wrap gap-4 justify-between" style={{ alignItems: 'start' }}>
                            <input
                                className="px-4 py-3 flex-1 min-w-[50px] bg-black"
                                style={{ border: '1px solid #3D3D3D', borderRadius: '10px' }}
                                type="text"
                                placeholder="First Name"
                                name='fname'
                                value={result.name}
                                required
                            />
                            <input
                                className="px-4 py-3 flex-1 min-w-[50px] bg-black"
                                style={{ border: '1px solid #3D3D3D', borderRadius: '10px' }}
                                type="text"
                                placeholder="Last Name"
                                name='lname'
                                required
                            />
                        </div>

                        <div className="h-[120px] flex max:w-[680px] flex-wrap gap-4 justify-between" style={{ alignItems: 'start' }}>
                            <input
                                className="px-4 py-3 flex-1 min-w-[50px] bg-black"
                                style={{ border: '1px solid #3D3D3D', borderRadius: '10px' }}
                                type="email"
                                placeholder="Email address"
                                name='email'
                                required
                            />
                            <input
                                className="px-4 py-3 flex-1 min-w-[50px] bg-black"
                                style={{ border: '1px solid #3D3D3D', borderRadius: '10px' }}
                                type="tel"
                                name='phoneno'
                                placeholder="Phone number"
                            />
                        </div>
                    </div>

                    <div className="h-[200px] w-full flex flex-col justify-evenly">
                        <textarea
                            className="flex h-50 bg-black px-4 py-3 text-center"
                            placeholder="Message"
                            style={{ border: '1px solid #3D3D3D', borderRadius: '10px', textAlign: 'center' }}
                            name='message'
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="p-2 bg-gradient-to-r from-purple-900 via-purple-800 to-fuchsia-900 text-white font-semibold"
                        style={{ borderRadius: '20px', cursor: 'pointer' }}
                    >
                        Send Message
                    </button>
                </form>

                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" className="flex flex-col relative justify-center gap-10 md:text-left w-full md:w-[620px] h-140 pl-1 rounded-md" style={{ fontFamily: 'serif' }}>
                    <div className='w-80 pl-10 relative'>
                        <MdLocalPhone size={40} style={{ background: '#800080', padding: '4px', borderRadius: '50%', position: 'relative', left: '25px', top: "50px" }} />
                        <p className='text-2xl ml-20' style={{ color: '#A5A5A5' }}>Phone</p>
                        <p className='ml-20'>+91 7065376040</p>
                    </div>
                    <div className='w-85 pl-10 relative'>
                        <MdEmail size={40} style={{ background: '#800080', padding: '4px', borderRadius: '50%', position: 'relative', left: '25px', top: "50px" }} />
                        <p className='text-2xl ml-20' style={{ color: '#A5A5A5' }}>Email</p>
                        <p className='ml-20'>parikshits563@gmail.com</p>
                    </div>
                    <div className='w-95 pl-10 relative'>
                        <MdLocationOn size={40} style={{ background: '#800080', padding: '4px', borderRadius: '50%', position: 'relative', left: '25px', top: "50px" }} />
                        <p className='text-2xl ml-20' style={{ color: '#A5A5A5' }}>Adress</p>
                        <p className='ml-20'>Navyug Market GZB, India</p>
                    </div>
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
