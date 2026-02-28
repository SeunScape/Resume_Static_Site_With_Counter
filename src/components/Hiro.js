import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter, faEnvelope } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";
import hr from '../assets/curve-hr.svg';
import '../animated.css';

const Hiro = () => {
    const [count, setCount] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://eugc6sr4sl.execute-api.us-east-1.amazonaws.com/Prod/counter');
                if (!response.ok) throw new Error('Network response was not ok');
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
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-10 pointer-events-none"
                style={{ backgroundColor: '#00f2ff' }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
                style={{ backgroundColor: '#00c4ce' }} />

            {/* Subtle grid background */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundSize: '40px 40px',
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`
            }} />

            <div
                id="home"
                className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pt-24 text-center overflow-x-hidden"
                style={{ fontFamily: 'JetBrains Mono' }}
            >
                <div className="max-w-4xl mx-auto flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000">

                    {/* Name & Title */}
                    <h1 className="font-black tracking-tighter mb-4 leading-none uppercase">
                        <span
                            className="block text-white"
                            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                        >
                            HI, I'M
                        </span>
                        <span
                            className="block"
                            style={{
                                fontFamily: 'Public Sans, sans-serif',
                                fontWeight: 900,
                                fontStretch: 'condensed',
                                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                                color: '#00f2ff',
                                textShadow: '0 0 20px rgba(0, 242, 255, 0.25), 0 0 40px rgba(0, 242, 255, 0.15)'
                            }}
                        >
                            SEUN ALABI
                        </span>
                    </h1>

                    {/* Role */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="h-px w-8 bg-gray-700" />
                        <h2 className="text-lg sm:text-xl md:text-2xl text-white tracking-widest uppercase">
                            Cloud / DevOps Engineer
                        </h2>
                        <span className="h-px w-8 bg-gray-700" />
                    </div>

                    {/* Bio */}
                    <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed font-light mb-8">
                        Designing and managing cloud infrastructure across AWS and Azure — networking, compute, serverless, containerized workloads, and AI-ready environments.
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'Python', 'CI/CD', 'Serverless'].map((skill, i) => (
                            <span
                                key={skill}
                                className={`px-4 py-1.5 rounded-full text-xs tracking-wide transition-colors cursor-default border${i >= 4 ? ' hidden sm:inline-flex' : ''}`}
                                style={{
                                    color: '#00f2ff',
                                    borderColor: 'rgba(0, 242, 255, 0.3)',
                                    backgroundColor: 'rgba(0, 242, 255, 0.07)'
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="text-center px-6 py-3 font-bold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: '#00f2ff',
                                color: '#000000',
                                boxShadow: '0 0 0 transparent'
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,242,255,0.4)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 transparent'}
                        >
                            My Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-center px-6 py-3 font-bold text-sm tracking-wide uppercase rounded border transition-all duration-300 hover:bg-cyan-500/10"
                            style={{
                                color: '#00f2ff',
                                borderColor: '#00f2ff',
                                backgroundColor: 'transparent'
                            }}
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social Icons */}
                    <ul className="flex gap-5 sm:gap-8 items-center">
                        <li>
                            <a
                                href="https://github.com/SeunScape/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                                style={{ '--hover-color': '#00f2ff' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#00f2ff'}
                                onMouseLeave={e => e.currentTarget.style.color = 'white'}
                            >
                                <FontAwesomeIcon size="lg" icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/seun-alabi-9090041b1/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                                onMouseEnter={e => e.currentTarget.style.color = '#00f2ff'}
                                onMouseLeave={e => e.currentTarget.style.color = 'white'}
                            >
                                <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/rixblues"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                                onMouseEnter={e => e.currentTarget.style.color = '#00f2ff'}
                                onMouseLeave={e => e.currentTarget.style.color = 'white'}
                            >
                                <FontAwesomeIcon size="lg" icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:your@email.com"
                                className="text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                                onMouseEnter={e => e.currentTarget.style.color = '#00f2ff'}
                                onMouseLeave={e => e.currentTarget.style.color = 'white'}
                            >
                                <FontAwesomeIcon size="lg" icon={faEnvelopeSolid} />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Visitor counter (hidden but preserved) */}
                <div id="count" className="text-sm sm:text-base md:text-lg font-semibold mb-2 mt-4" style={{ color: 'white'}}>
                    {/* {count} */}
                </div>

                {/* Scroll indicator */}
                <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce cursor-pointer">
                    <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
                        <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#00f2ff' }} />
                    </div>
                </div>

                {/* Decorative terminal text (desktop only) */}
                <div className="hidden lg:block absolute top-1/3 left-10 opacity-20 pointer-events-none">
                    <div className="text-xs space-y-1" style={{ color: '#00f2ff', fontFamily: 'JetBrains Mono' }}>
                        <div>&gt; initializing_shell</div>
                        <div>&gt; loading_modules...</div>
                        <div>&gt; [OK] AWS_SDK</div>
                        <div>&gt; [OK] KUBECTL</div>
                    </div>
                </div>

                <img src={hr} className="w-full md:h-2 mt-6" alt="Horizontal Rule" />
            </div>
        </>
    );
};

export default Hiro;