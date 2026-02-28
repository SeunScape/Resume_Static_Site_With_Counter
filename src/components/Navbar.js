import { useState } from 'react';

const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#honors', label: 'Certifications' },
    { href: 'https://medium.com/@SeunAlabi', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="fixed z-50 w-full top-0 left-0"
            style={{
                fontFamily: 'JetBrains Mono',
                backgroundColor: 'rgba(10,10,10,0.92)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-16">
                {/* Brand */}
                <a
                    href="#home"
                    className="text-sm font-bold tracking-widest uppercase"
                    style={{ color: '#00f2ff' }}
                >
                    SA_
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-1 text-white">
                    {links.map(({ href, label }) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="px-3 py-2 text-sm transition-colors"
                                onMouseEnter={e => (e.currentTarget.style.color = '#00f2ff')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'white')}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            className="ml-2 px-4 py-2 text-sm font-bold rounded border transition-all duration-200"
                            style={{ color: '#00f2ff', borderColor: '#00f2ff', backgroundColor: 'transparent' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = '#00f2ff';
                                e.currentTarget.style.color = '#000';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#00f2ff';
                            }}
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Hamburger button — mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    <span
                        className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
                        style={open ? { transform: 'translateY(8px) rotate(45deg)' } : {}}
                    />
                    <span
                        className="block w-6 h-0.5 bg-white transition-all duration-300"
                        style={open ? { opacity: 0, transform: 'scaleX(0)' } : {}}
                    />
                    <span
                        className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
                        style={open ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}}
                    />
                </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div
                    className="md:hidden flex flex-col px-4 pb-4"
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                        backgroundColor: 'rgba(10,10,10,0.98)',
                    }}
                >
                    {links.map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="py-3 text-sm text-white transition-colors"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#00f2ff')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        onClick={() => setOpen(false)}
                        className="mt-3 py-3 text-sm font-bold text-center rounded border"
                        style={{ color: '#00f2ff', borderColor: '#00f2ff' }}
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
}
