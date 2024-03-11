import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'
import '../animated.css'

    const Hiro = () => {
        const [count, setCount] = useState('');
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://eugc6sr4sl.execute-api.us-east-1.amazonaws.com/Prod/counter');
    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
    
                    const data = await response.json();
    
                    if (data && data.newCount !== undefined) {
                        setCount(`Visitor's count: ${data.newCount}`);
                    } else {
                        throw new Error('newCount not found in API response');
                    }
                } catch (error) {
                    console.error('Error fetching count:', error);
                    setCount('Count: N/A');
                }
            };
    
            fetchData();
        }, []);

    return (
        <>
        {/* {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        } */}
        <div id="home" className="flex flex-col items-center justify-center" style={{ fontFamily: 'JetBrains Mono'}}>
            <div className="flex w-full min-h-screen flex-col md:flex-row gap-5 items-center justify-center text-white">
                <div className='md:w-3/6 md:p-4'>
                    {/* Display different images based on viewport size */}
                    <img src="/bg2.png" className="hidden md:block" alt="Background Desktop"/>
                    <img src="/profilepic.jpeg" className="block md:hidden rounded-full w-40 h-40" alt="Your Picture Mobile"/>
                </div>
                <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
                    <div className="flex flex-col w-full mt-8">
                        <h1 className="text-xl text-gray-400">Hello, </h1>
                        <h1 className="text-2xl font-bold">I'm  Seun Alabi</h1>
                        <div className='animated-text'>
                            <span></span>    <div className="engineer-text">Engineer</div>
                        </div>
                        <p className="text-md font-light text-gray-400 ">With a deep connection to Information Technology and a background in computer science, I have explored various aspects of software development, including frontend, backend, devops, cloud computing, and serverless architecture. Certified by AWS and Cisco, I bring skill set in networking, database & security. Currently seeking opportunities to gain valuable experience in my field </p>
                    </div>
                    
                    <ul className='flex mt-2 gap-4 items-center'>
                        <li>
                            <a href='https://github.com/SeunScape/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                        </li> 
                        {/* <li>
                            <a href='https://twitter.com/blerix_' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faTwitter} /></a>
                        </li> */}
                        <li>
                            <a href='https://www.linkedin.com/in/seun-alabi-9090041b1/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="count" style={{color:'white'}} className="mb-8">
                {count}
            </div>
            <img src={hr} className="w-full md:h-2" alt="Horizontal Rule" />
            {/* <img src= {arrow} alt={"javascript"} className="mx-auto mb-2" width="70" height="70"/> */}
        </div>


        </>
    )
}
export default Hiro;