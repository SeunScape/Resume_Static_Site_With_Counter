import React from 'react';
import hr from '../assets/curve-hr.svg';

import linux from '../assets/skills/linux.svg';
import bash from '../assets/skills/bash.svg';
import git from '../assets/skills/git.svg';
import aws from '../assets/skills/aws-svgrepo-com.svg';
import python from '../assets/skills/python.svg';
import terraformio from '../assets/skills/terraform-icon-svgrepo-com.svg';

const skills = [
    {
        icon: 'cloud',
        category: 'Cloud',
        title: 'Cloud Architecture',
        description: 'Architecting scalable cloud-native infrastructures across major providers.',
        tools: 'AWS, Azure',
    },
    {
        icon: 'sync_alt',
        category: 'DevOps',
        title: 'CI/CD Pipelines',
        description: 'Automating deployment pipelines for fast, reliable software delivery.',
        tools: 'GitHub Actions, Jenkins',
    },
    {
        icon: 'code',
        category: 'IaC',
        title: 'Infra as Code',
        description: 'Provisioning and managing infrastructure declaratively and securely.',
        tools: 'Terraform, Ansible, CloudFormation, SAM',
    },
    {
        icon: 'deployed_code',
        category: 'Containers',
        title: 'Orchestration',
        description: 'Containerizing and orchestrating microservices at scale.',
        tools: 'Docker, Kubernetes, ECS',
    },
    {
        icon: 'terminal',
        category: 'Scripting',
        title: 'System Scripting',
        description: 'Automating tasks and system administration with scripting.',
        tools: 'Python, Bash',
    },
    {
        icon: 'shield',
        category: 'Security',
        title: 'Security & IAM',
        description: 'Implementing robust access controls and security best practices.',
        tools: 'IAM, Zero Trust, AWS Security',
    },
    {
        icon: 'hub',
        category: 'Network',
        title: 'Network Design',
        description: 'Designing resilient and secure cloud network architectures.',
        tools: 'VPC, DNS, Load Balancers',
    },
    {
        icon: 'monitoring',
        category: 'Observability',
        title: 'Observability Stack',
        description: 'Monitoring and maintaining system health with full-stack observability tools.',
        tools: 'Grafana, Prometheus, CloudWatch',
    },
];

const techIcons = [
    { src: linux, label: 'Linux' },
    { src: bash, label: 'Bash' },
    { src: git, label: 'Git' },
    { src: aws, label: 'AWS' },
    { src: python, label: 'Python' },
    { src: terraformio, label: 'Terraform' },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-14 overflow-x-hidden"
            style={{ fontFamily: 'JetBrains Mono', backgroundColor: '#0a0a0a' }}
        >
            {/* Background blobs */}
            <div
                className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] opacity-10 pointer-events-none"
                style={{ backgroundColor: '#00f2ff' }}
            />
            <div
                className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
                style={{ backgroundColor: '#00c4ce' }}
            />

            {/* Section heading */}
            <div className="relative z-10 text-center mb-10">
                <h2 className="font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-4">
                    My{' '}
                    <span style={{ color: '#00f2ff', textShadow: '0 0 25px rgba(0,242,255,0.5)' }}>
                        Skills
                    </span>
                    <span style={{ color: '#00f2ff' }}>_</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-2">
                    Specialized in cloud architecture and automated infrastructure.
                </p>
                <div className="h-1 w-24 mx-auto rounded-full opacity-50 mt-4" style={{ backgroundColor: '#00f2ff' }} />
            </div>

            {/* Skills grid */}
            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {skills.map(({ icon, category, title, description, tools }) => (
                    <div
                        key={title}
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-offset="100"
                        className="flex flex-col rounded-xl p-6 border transition-all duration-300"
                        style={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.07)' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,242,255,0.15)';
                            e.currentTarget.style.borderColor = 'rgba(0,242,255,0.3)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                        }}
                    >
                        {/* Icon + badge — flex-shrink-0 on icon, whitespace-nowrap on badge prevents overflow */}
                        <div className="flex items-center justify-between gap-2 mb-6">
                            <span
                                className="material-symbols-outlined text-3xl flex-shrink-0"
                                style={{ color: '#00f2ff' }}
                            >
                                {icon}
                            </span>
                            <span
                                className="px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase border whitespace-nowrap flex-shrink-0"
                                style={{
                                    color: '#94a3b8',
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                }}
                            >
                                {category}
                            </span>
                        </div>

                        <h3 className="text-white text-base font-bold mb-2">{title}</h3>

                        <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                            {description}
                        </p>

                        <p className="text-xs font-bold" style={{ color: 'rgba(0,242,255,0.8)' }}>
                            {tools}
                        </p>
                    </div>
                ))}
            </div>

            {/* Tech icons row */}
            <ul className="relative z-10 grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 max-w-4xl w-full mb-12">
                {techIcons.map(({ src, label }) => (
                    <li key={label} className="text-center group">
                        <img
                            src={src}
                            alt={label}
                            className="mx-auto mb-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110"
                            style={{ filter: 'grayscale(20%)' }}
                        />
                        <p className="text-xs text-gray-400 group-hover:text-white transition-colors">{label}</p>
                    </li>
                ))}
            </ul>

            <img src={hr} className="w-full md:h-2 mt-4 opacity-50" alt="Horizontal Rule" />
        </section>
    );
}