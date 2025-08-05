import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
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
            <div id="home" className="flex flex-col items-center justify-center" style={{ fontFamily: 'JetBrains Mono'}}>
                <div className="flex w-full h-[90vh] flex-col md:flex-row gap-5 items-center justify-center text-white">
                    <div className='md:w-3/6 md:p-4'>
                        <img src="/bg2.png" className="hidden md:block max-h-[80vh]" alt="Background Desktop"/>
                    </div>                    
                    <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
                        <div className="flex flex-col w-full">
                            <h1 className="text-xl text-gray-400">Hello, </h1>
                            <h1 className="text-2xl font-bold mb-2" style={{ color: '#F27F3D' }}>I'm Seun Alabi</h1>
                            <p className="text-gray-300 mb-4">
                                I am driven and curious about how innovative technology is used to solve everyday problems. 
                                I'm skilled in cloud services and solutions, and in the deployment and management of workloads in the cloud.
                            </p>
                            <div className="mt-2 shadow-lg">
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#F27F3D' }}>Achievements</h3>
                                <ul className="list-disc list-inside text-gray-200 space-y-1">
                                      <li><strong> 2X AWS Certified</strong> professional, skillful in cost-optimized cloud architecture and infrastructure as code</li>
                                    <li>1+ years of <strong>IT experience</strong> handling server maintenance, IT support, and network troubleshooting</li>
                                    <li>Built <strong>practical projects</strong> and solutions that solves real problems using cloud-native and AI tools  </li>
                                    <li>Comfortable with <strong>Linux</strong>, Bash scripting, and Python used in cloud servers and automation</li>
                                    <li>Actively <strong>volunteering</strong> at tech meetups, AWS Cloud Club events, and builder community events</li>
                                </ul>
                            </div>
                            <ul className='flex mt-2 gap-4 items-center'>
                                <li>
                                    <a href='https://github.com/SeunScape/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='xl' icon={faGithub} /></a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/seun-alabi-9090041b1/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='xl' icon={faLinkedinIn} /></a>
                                </li>
                                <li>
                                    <a href='https://x.com/rixblues' rel="noreferrer" target="_blank"><FontAwesomeIcon size='xl' icon={faTwitter} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="count" style={{color:'white'}} className="mb-2">
                    {count}
                </div>
                <img src={hr} className="w-full md:h-2" alt="Horizontal Rule" />
            </div>
        </>
    )
}
export default Hiro;