import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
            >
                <div className='w-full h-screen text-center'>
                    <div

                        className='flex justify-center items-center p-3 max-w-[1240px] w-full h-full mx-auto'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ y: [-50, 0], opacity: 3 }}
                        >
                            <h1 className='  font-extrabold text-transparent text-6xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>Hello, I am Shivang Choudhary</h1>
                            <h2 className='text-gray-600  py-3'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {

                                        typewriter

                                            .typeString("A Software Developer")

                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to code.")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to learn new technologies.")

                                            .start();
                                    }}
                                />
                            </h2>

                            {/* <h2 className='text-gray-600  py-3'>Frontend Developer</h2> */}
                            <div className='flex justify-between items-center m-auto max-w-[280px] py-5'>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a
                                        href='https://github.com/ShivangChoudhary'
                                        target={"_blank"}
                                        rel={"noreferrer"}

                                    ><FaGithub /></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a
                                        href='https://www.linkedin.com/in/shivangchoudhary02/'
                                        target={"_blank"}
                                        rel={"noreferrer"}>
                                        <FaLinkedinIn />


                                    </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a
                                        href='https://www.geeksforgeeks.org/user/shivang_choudhary/'
                                        target={"_blank"}
                                        rel={"noreferrer"}>
                                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
<path fill="#43a047" d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"></path>
</svg>

                                    </a>
                                </div>
                                <div onClick={() => window.location.href = 'mailto:shivang.ch007@gmail.com'} className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>

                                    <AiOutlineMail />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </motion.div>
        </>



    )
}

export default Hero