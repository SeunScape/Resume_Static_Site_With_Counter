import React from 'react';

export default function Navbar() {
    return (
        <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-4 py-3 md:px-8 md:py-4 lg:px-20 xl:px-36' style={{ fontFamily: 'JetBrains Mono'}}>
            <div className="flex justify-center items-center text-white w-full">
                {/* Navigation Links + Resume Button - All Centered */}
                <ul className="flex flex-wrap justify-center items-center">
                    <li className="px-1 py-1 md:p-4">
                        <a href="#home" className="hover:underline text-xs md:text-base hover:text-teal-400 transition-colors">
                            About
                        </a>
                    </li>
                    <li className="px-1 py-1 md:p-4">
                        <a href="#skills" className="hover:underline text-xs md:text-base hover:text-teal-400 transition-colors">
                            Skills
                        </a>
                    </li>
                    <li className="px-1 py-1 md:p-4">
                        <a href="#honors" className="hover:underline text-xs md:text-base hover:text-teal-400 transition-colors">
                            Certifications
                        </a>
                    </li>
                    <li className="px-1 py-1 md:p-4">
                        <a href="#certs" className="hover:underline text-xs md:text-base hover:text-teal-400 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li className="px-1 py-1 md:p-4">
                        <a 
                            href="/resume.pdf" 
                            className="bg-teal-500 hover:bg-teal-600 rounded-full px-2 py-0.5 md:px-4 md:py-2 border border-teal-600 text-xs md:text-base font-medium transition-colors duration-200"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}