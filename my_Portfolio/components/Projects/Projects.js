import React from 'react'
import ProjectItem from './ProjectItem'
import mingoImg from '../../public/assets/REST.jpg'
import blinkImg from '../../public/assets/chat.png'
import expensoImg from '../../public/assets/help.svg'
import mailImg from '../../public/assets/dash.jpg'
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Projects
                    </p>
                    <h2 className='py-4'>What I&apos;ve Built</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                    className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem
                        title='CHAT BOT SYSTEM'
                       projectUrl=  ''
                        backgroundImg={blinkImg}
                        desc='It is a Chatbot System which uses Chat gpt API. Their is also Dalle function by which we can generate text to image.'
                        tech=' React JS, React CHAT GPT API, Material UI & React-Image-Magnify.'
                        sourceLink='https://github.com/ShivangChoudhary/Chat-Bot-System'
                        demoLink='https://phenomenal-pika-7c501e.netlify.app/'

                    />
                    <ProjectItem
                        title='Restaurant Website   '
                        projectUrl=''
                        backgroundImg={mingoImg}
                        desc='It is a Restaurant website which is used to see a menu of a restaurant and also place order from that website.

                        '
                        tech='HTML, CSS, JAVASCRIPT.'
                        sourceLink='https://github.com/ShivangChoudhary/Restaurant-Website'
                        demoLink='https://shivangchoudhary.github.io/Restaurant-Website/'
                    />
                    <ProjectItem
                        title='VIT Help Desk App'
                        projectUrl=''
                        backgroundImg={expensoImg}
                        desc='Created an innovative help desk platform for hostel'
                        tech=' Dart, Flutter, Android Studio, Firebase.'
                        sourceLink=''
                        demoLink=''

                    />
                    <ProjectItem
                        title='SN Corporation Data Analysis'
                        projectUrl=''
                        backgroundImg={mailImg}
                        desc='Created a comprehensive Power BI dashboard for SN Corporation, amalgamating data from various 
                        sources.'
                        tech='Power BI, Data Cleaning, Data Visualization.'
                        sourceLink=''
                        demoLink='https://rb.gy/ao6kj4'

                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Projects