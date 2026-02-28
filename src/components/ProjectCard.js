import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard({ title, description, skills, githubUrl, url }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="100"
            className="flex flex-col rounded-lg p-4 sm:p-6 border transition-all duration-300"
            style={{
                backgroundColor: '#111827',
                borderColor: 'rgba(255,255,255,0.07)',
                fontFamily: 'JetBrains Mono',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 242, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 255, 0.25)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
            }}
        >
            {/* Card body */}
            <div className="flex-1 mb-6 space-y-4">
                {/* Title */}
                <h3 className="text-white font-bold text-base uppercase tracking-tight leading-snug">
                    {title}
                </h3>

                {/* Overview */}
                <div>
                    <span className="text-xs font-bold block mb-1" style={{ color: '#00f2ff' }}>
                        OVERVIEW:
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                        {description}
                    </p>
                </div>

                {/* Tools */}
                {skills && skills.length > 0 && (
                    <div>
                        <span className="text-xs font-bold block mb-2" style={{ color: '#00f2ff' }}>
                            TOOLS:
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-xs rounded border"
                                    style={{
                                        color: '#94a3b8',
                                        borderColor: 'rgba(255,255,255,0.08)',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Button */}
            <div className="pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                {githubUrl && githubUrl !== '#' ? (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 rounded border px-4 py-3 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300"
                        style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = '#00f2ff';
                            e.currentTarget.style.color = '#00f2ff';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                            e.currentTarget.style.color = 'white';
                        }}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>View on GitHub</span>
                    </a>
                ) : url ? (
                    <a
                        href={`https://${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 rounded border px-4 py-3 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300"
                        style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = '#00f2ff';
                            e.currentTarget.style.color = '#00f2ff';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                            e.currentTarget.style.color = 'white';
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <span>View Live</span>
                    </a>
                ) : (
                    <div
                        className="w-full flex items-center justify-center gap-2 rounded border px-4 py-3 text-xs font-bold uppercase tracking-widest"
                        style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#4b5563' }}
                    >
                        <span>In Progress</span>
                    </div>
                )}
            </div>
        </div>
    );
}