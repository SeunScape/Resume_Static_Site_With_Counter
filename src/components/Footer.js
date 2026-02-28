export default function Footer() {
    return (
        <div
            className="text-white px-6 py-6"
            style={{ fontFamily: 'JetBrains Mono', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#0a0a0a' }}
        >
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-500 tracking-widest uppercase">
                <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
                <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
                <li><a href="#skills" className="transition-colors hover:text-white">Skills</a></li>
                <li><a href="https://medium.com/@SeunAlabi" className="transition-colors hover:text-white">Blog</a></li>
                <li><a href="#honors" className="transition-colors hover:text-white">Certifications</a></li>
                <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
        </div>
    );
}
