import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import profilePic from '../assets/profile.jpeg'; 

const About = () => {
    return (
        <section
            id="about"
            className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-x-hidden"
            style={{ fontFamily: 'JetBrains Mono', backgroundColor: '#0a0a0a' }}
        >
            {/* Background decorative blobs — matches Hiro */}
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] opacity-10 pointer-events-none"
                />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
               />



            {/* Section heading */}
            <div className="relative z-10 text-center mb-8">
                <h2 className="font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-4">
                    About{' '}
                    <span style={{ color: '#00f2ff', textShadow: '0 0 25px rgba(0,242,255,0.5)' }}>Me</span>
                    <span style={{ color: '#00f2ff' }}>_</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-2">
                    A little bit about who I am, what I've done, and where I'm going.
                </p>
                <div className="h-1 w-24 mx-auto rounded-full opacity-50 mt-4" style={{ backgroundColor: '#00f2ff' }} />
            </div>

            {/* Main grid */}
            <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left — Profile card */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div
                        className="flex flex-col items-center rounded-xl p-6 sm:p-8 border shadow-xl"
                        style={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.07)' }}
                    >
                        {/* Profile picture */}
                        <div className="relative group mb-4">
                            <div
                                className="absolute -inset-1 rounded-full blur transition-all group-hover:blur-md"
                                style={{ backgroundColor: 'rgba(0,242,255,0.2)' }}
                            />
                            <img
                                src={profilePic}
                                alt="Seun Alabi"
                                className="relative w-32 h-32 rounded-full object-cover border-4"
                                style={{ borderColor: '#0a0a0a' }}
                            />
                        </div>

                        {/* Name & role */}
                        <h3 className="text-2xl font-bold text-white mb-1">Seun Alabi</h3>
                        <p
                            className="text-xs uppercase tracking-widest font-bold mb-4"
                            style={{ color: '#00f2ff' }}
                        >
                            Cloud / DevOps Engineer
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-400 mb-5">
                            <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
                            <span className="text-sm">Lagos, Nigeria</span>
                        </div>

                        {/* Social icon buttons */}
                        <div className="flex gap-4">
                            {[
                                { icon: faEnvelope, href: 'mailto:your@email.com', label: 'Email' },
                                { icon: faLinkedinIn, href: 'https://www.linkedin.com/in/seun-alabi-9090041b1/', label: 'LinkedIn' },
                                { icon: faGithub, href: 'https://github.com/SeunScape/', label: 'GitHub' },
                            ].map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="flex items-center justify-center w-10 h-10 rounded-lg border text-gray-300 transition-all duration-300"
                                    style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = '#00f2ff';
                                        e.currentTarget.style.color = '#00f2ff';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.color = '#d1d5db';
                                    }}
                                >
                                    <FontAwesomeIcon icon={icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — Bio card */}
                <div className="lg:col-span-8">
                    <div
                        className="rounded-xl p-6 sm:p-8 lg:p-10 border shadow-xl h-full flex flex-col justify-between"
                        style={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.07)' }}
                    >
                        {/* Tag + heading */}
                        <div>
                            <span
                                className="inline-block px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-widest border"
                                style={{ color: '#00f2ff', backgroundColor: 'rgba(0,242,255,0.08)', borderColor: 'rgba(0,242,255,0.2)' }}
                            >
                                infrastructure
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                               Building Scalable Infrastructure
                            </h3>

                            {/* Bio paragraphs — replace with your real text */}
                            <div className="space-y-3 text-gray-400 leading-relaxed text-sm">
                                <p>
                                   I am a Cloud and DevOps Engineer with hands-on experience designing, implementing, and managing scalable infrastructure across AWS and Azure. I work across the full infrastructure lifecycle — provisioning with Terraform and CloudFormation, orchestrating containerized workloads with Kubernetes, and building CI/CD pipelines that deliver reliably and fast.
                                </p>
                                <p>
                                    Through my IT consultancy work, I have contributed to modernization, hybrid cloud, and multi-cloud projects for enterprises looking to scale and strengthen the resilience of their systems. I also have hands-on experience with post-deployment infrastructure management in co-location data centers, and securing cloud environments using CNAPPs including Trend Micro and Palo Alto to enforce compliance and protect cloud networks.
                                </p>
                                <p>
                                    I hold an AWS Certified Solutions Architect certification, a Bachelor's degree in Computer Science, and I currently teach cloud computing, helping the next generation of engineers build practical skills in the field. I am always learning, always building, and looking to contribute to a team doing meaningful work at scale.
                                </p>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div
                            className="mt-6 pt-5 border-t grid grid-cols-2 md:grid-cols-4 gap-4"
                            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                        >
                            {[
                                { value: 'AWS', label: 'Certified Associate' },
                                { value: '99.9%', label: 'Uptime Record' },
                                { value: '3yr+', label: 'Experience' },
                                { value: '∞', label: 'Deployments' },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <p className="font-mono text-xl font-bold mb-1" style={{ color: '#00f2ff' }}>{value}</p>
                                    <p className="text-xs uppercase tracking-widest text-gray-500">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;