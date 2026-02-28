import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const contacts = [
    {
        icon: faGithub,
        title: 'GITHUB',
        subtitle: 'CHECK MY REPOS',
        href: 'https://github.com/SeunScape/',
    },
    {
        icon: faLinkedinIn,
        title: 'LINKEDIN',
        subtitle: "LET'S CONNECT",
        href: 'https://www.linkedin.com/in/seun-alabi-9090041b1/',
    },
    {
        icon: faTwitter,
        title: 'TWITTER',
        subtitle: 'FOLLOW ME',
        href: 'https://x.com/rixblues',
    },
    {
        icon: faEnvelope,
        title: 'EMAIL',
        subtitle: 'SAY HELLO',
        href: 'mailto:alabioluwaseun40@gmail.com',
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-hidden w-full"
            style={{ fontFamily: 'JetBrains Mono', backgroundColor: '#0a0a0a' }}
        >
            {/* Background blobs */}
            <div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[120px] pointer-events-none"
                style={{ backgroundColor: 'rgba(0,242,255,0.05)' }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[150px] pointer-events-none"
                style={{ backgroundColor: 'rgba(0,242,255,0.04)' }}
            />

            <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">

                {/* Section heading */}
                <div className="relative z-10 text-center mb-8 w-full">
                    <h2 className="font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-4">
                        LET'S{' '}
                        <span style={{ color: '#00f2ff', textShadow: '0 0 25px rgba(0,242,255,0.5)' }}>
                            CONNECT
                        </span>
                        <span style={{ color: '#00f2ff' }}>_</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mb-2">
                        Open to opportunities, collaborations, and conversations.
                    </p>
                    <div className="h-1 w-24 mx-auto rounded-full opacity-50 mt-4" style={{ backgroundColor: '#00f2ff' }} />
                </div>

                {/* Status badge */}
                <div
                    className="mb-8 flex items-center gap-2 px-5 py-2 rounded-xl border text-xs sm:text-sm"
                    style={{
                        backgroundColor: '#111827',
                        borderColor: 'rgba(0,242,255,0.3)',
                    }}
                >
                    <span style={{ color: '#00f2ff' }}>●</span>
                    <span
                        className="font-bold uppercase tracking-widest"
                        style={{ color: '#00f2ff' }}
                    >
                        STATUS: ACTIVE
                    </span>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
                    {contacts.map(({ icon, title, subtitle, href }) => (
                        <a
                            key={title}
                            href={href}
                            target={href.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noreferrer"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-offset="100"
                            className="group flex flex-col items-center p-4 sm:p-6 rounded-xl border transition-all duration-300 min-w-0"
                            style={{
                                backgroundColor: '#111827',
                                borderColor: 'rgba(255,255,255,0.07)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,242,255,0.2)';
                                e.currentTarget.style.borderColor = '#00f2ff';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                            }}
                        >
                            {/* Icon circle */}
                            <div
                                className="mb-3 flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110 text-base"
                                style={{
                                    backgroundColor: 'rgba(0,242,255,0.08)',
                                    color: '#00f2ff',
                                }}
                            >
                                <FontAwesomeIcon icon={icon} size="lg" />
                            </div>

                            {/* Title */}
                            <h3 className="text-white text-sm font-bold tracking-widest mb-1 uppercase">
                                {title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">
                                {subtitle}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}