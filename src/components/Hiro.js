import {useState} from 'react'

import profile from '../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'
import '../animated.css'
import arrow from '../assets/down-arrow-download-svgrepo-com.svg'
export default function Hiro () {

    // const [loaded, setLoaded] = useState(true);

    return (
        <>
        {/* {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        } */}
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img src="/bg2.png"/>
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" style={{ fontFamily: 'JetBrains Mono'}}>
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hello, </h1>
                    <h1 className="text-2xl font-bold">I'm  Seun Alabi</h1>
                    <div className='animated-text'>
                        <span></span>
                    </div>
                    <p className="text-md font-light text-gray-400 ">Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Cloud Computing, DevSecops, and Web Development. Now I am looking for more experience in my field.</p>
                </div>
                <a href='http://blog.dama.zip' className='mt-2 block'>Read My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/radendi' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href='htps://linkedin.com/damasukma' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
            {/* <img src= {arrow} alt={"javascript"} className="mx-auto mb-2" width="70" height="70"/> */}
        </div>
        </>
    )
}
