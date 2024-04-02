import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I embarked my journey as a B.Tech Computer Science & Engineering student at Prestige Institute of Engineering Management and Research in 2021. I delved into the world of cutting-edge technologies, such as C++, React. I also took my passion for technology and part of Google Developer Student Clubs and the Placement Cell in my college, alongside my equally enthusiastic classmates.
                </p>
                <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects  as my personal projects. I also contributed for the GDSC PIEMR web page. My eagerness to learn and embrace a growth mindset enables me to collaborate effectively with others and contribute to societal initiatives.
                </p> 
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="..assets/Shweta.pdf" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About