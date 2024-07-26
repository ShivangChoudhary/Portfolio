import React from 'react'
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';



const About = () => {
    return (

        <div id='about' className='w-full md:h-screen p-2 flex items-center '>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div

                    className='col-span-2'>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            About
                        </p>
                        <h2 className='py-4'>Who I Am</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='py-2 text-gray-600'>

                        I am a dedicated Software Developer with a strong foundation in data analysis. My expertise lies in developing innovative solutions that enhance efficiency and drive meaningful insights.

In my recent projects, I have created a comprehensive Power BI dashboard for SN Corporation, integrating data from multiple sources to provide real-time, actionable insights. I also developed a help desk app for hostel residents, significantly improving problem resolution and resident satisfaction.

                        </p>
                        <p className='py-2 text-gray-600'>
                        My diverse skill set allows me to bridge the gap between software development and data analysis, delivering solutions that are both technically robust and data-driven. Whether working on a complex application or diving deep into data to uncover trends, I am committed to delivering high-quality results that meet user needs and business goals.
🚀
                        </p>
                        <a download href='/shivang sde.pdf'
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300'>
                                Download Resume
                            </button>
                        </a>

                    </motion.div>


                </div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='w-full h-auto m-auto  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

                    <Avatar sx={{ width: 260, height: 260 }}
                        alt="Shivang" src="https://i.postimg.cc/9fVKJt4n/me2.jpg" />



                </motion.div>
            </div >
        </div>

    )
}

export default About