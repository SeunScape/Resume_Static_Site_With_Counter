import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hr from '../assets/curve-hr.svg';

const projects = [
    {
        id: 1,
        title: "Web App Deployment & Nginx Config with Terraform, Ansible & AWS",
        description: "A production-ready, two-tier web application infrastructure built with Terraform and configured with Ansible, demonstrating DevOps best practices and infrastructure as code principles.",
        skills: ["Terraform", "AWS EC2", "Ansible", "Load Balancers", "EC2 Autoscaling", "Nginx", "RDS MySQL"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/Terraform-Ansible-AWS-Infrastructure.git"
    },
    {
        id: 2,
        title: "Infrastructure-as-Code Demo with Terraform & Local AWS Stack",
        description: "Local cloud infrastructure simulation using Terraform and LocalStack. Spins up a mock AWS environment with a containerized NGINX web server inside a VPC, a mock S3 bucket for log storage, and a static frontend served at localhost:8080. Demonstrates modular Terraform code organization, networking, and local cloud emulation.",
        skills: ["Terraform", "LocalStack", "Docker", "NGINX", "AWS VPC", "AWS S3", "IaC", "Local Cloud Emulation"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/Infrastructure-as-Code-Demo-with-Terraform-Local-AWS-Stack"
    },
    {
        id: 3,
        title: "AI-Powered Content Automation Workflow with N8N",
        description: "Self-hosted AI content automation pipeline using N8N. Accepts a product name, calls GPT to generate 3 versions of marketing copy, writes output to Markdown files, and renders a live preview via MkDocs. Demonstrates no-code/low-code workflow design, AI content manipulation, and static site generation.",
        skills: ["N8N", "GPT API", "Markdown", "MkDocs", "Workflow Automation", "AI Integration", "Low-Code"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/AI-Powered-Content-Automation-Workflow-with-N8N/tree/main/n8n-copy-generator"
    },   
    {
        id: 4,
        title: "CI/CD Deployment Pipeline with GitHub Actions & GitHub Pages",
        description: "End-to-end CI/CD pipeline using GitHub Actions for a static web app. The workflow automatically lints code, runs tests, and deploys to GitHub Pages on every push to main. Demonstrates CI/CD fundamentals, automation best practices, and Git workflow discipline.",
        skills: ["GitHub Actions", "GitHub Pages", "CI/CD", "YAML", "Static Site", "Linting", "Automated Testing", "Git"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/static-site-workflow"
    },
    {
        id: 5,
        title: "Serverless Web App with CI/CD and IaC (AWS)",
        description: "End-to-end serverless web application with automated visitor tracking, React on S3/CloudFront, Lambda backend, DynamoDB, and full CI/CD pipelines.",
        skills: ["React", "AWS S3", "CloudFront", "Route 53", "Lambda", "DynamoDB", "API Gateway", "Python", "GitHub Actions", "Cypress"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/AWS_SAM_LAMBDA_API_GATEWAY"
    },
    {
        id: 6,
        title: "Full-Stack QR Code Generator with Cloud-Native Deployment (AWS EKS)",
        description: "Full-stack QR code generator with Next.js frontend, FastAPI backend, containerized with Docker, deployed on AWS EKS with automated CI/CD via GitHub Actions.",
        skills: ["Next.js", "FastAPI", "Python", "Docker", "Kubernetes", "AWS EKS", "AWS S3", "GitHub Actions"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/QR_Code_Generator_With_Docker.git"
    },
    {
        id: 7,
        title: "Flippay — Crypto & Gift Card Management Dashboard",
        description: "Frontend dashboard for a crypto and gift card management platform. Integrated Auth API and User API, built with React.js and Material UI for a modern user experience.",
        skills: ["React.js", "Material UI", "API Integration", "Authentication", "Frontend Development"],
        status: "others",
        url: "Flippay.com"
    },
    {
        id: 8,
        title: "AWS VPC IP Address Manager (IPAM) with Terraform",
        description: "Enterprise-grade IP address management for AWS workloads, automating network planning and monitoring across multiple VPCs using Terraform.",
        skills: ["AWS VPC", "IPAM", "Terraform", "Cloud9", "IaC", "AWS Networking"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/IP_Manager_With_Terraform"
    },
    {
        id: 9,
        title: "Serverless Email Notification System with AWS SES",
        description: "Automated email notification system using AWS Lambda and SES, with event-driven architecture for real-time message delivery triggered by JSON events.",
        skills: ["AWS Lambda", "Amazon SES", "Python", "Boto3", "Serverless", "Event-driven Architecture"],
        status: "completed",
        githubUrl: "https://github.com/SeunScape/MessagingApp_SES_LAMBDA.git"
    },
    {
        id: 10,
        title: "Kubernetes Operators",
        description: "In progress — implementing a practical Kubernetes Operators use case following the Linux Handbook hands-on course.",
        skills: ["Kubernetes", "Python", "Cloud Infrastructure", "DevOps"],
        status: "ongoing",
        githubUrl: "#"
    }
];

const tabs = [
    { id: 'completed', label: 'Completed' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'others', label: 'Others' },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState('completed');

    const filtered = projects.filter(p => p.status === activeTab);

    return (
        <section
            id="projects"
            className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-14 overflow-x-hidden"
            style={{ fontFamily: 'JetBrains Mono', backgroundColor: '#0a0a0a' }}
        >
            {/* Background blobs */}
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[150px] opacity-10 pointer-events-none"
                style={{ backgroundColor: '#00f2ff' }} />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
                style={{ backgroundColor: '#00c4ce' }} />

            {/* Section heading */}
            <div className="relative z-10 text-center mb-10">
                <h2 className="font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-4">
                    My{' '}
                    <span style={{ color: '#00f2ff', textShadow: '0 0 25px rgba(0,242,255,0.5)' }}>
                        Projects
                    </span>
                    <span style={{ color: '#00f2ff' }}>_</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-2">
                    Here are some of my projects — view more on my{' '}
                    <a
                        href="https://github.com/SeunScape"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors"
                        style={{ color: '#00f2ff' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'white'}
                        onMouseLeave={e => e.currentTarget.style.color = '#00f2ff'}
                    >
                        GitHub <FontAwesomeIcon icon={faGithub} />
                    </a>
                </p>
                <div className="h-1 w-24 mx-auto rounded-full opacity-50 mt-4"
                    style={{ backgroundColor: '#00f2ff' }} />
            </div>

            {/* Tab navigation */}
            <div className="relative z-10 flex justify-center mb-10">
                <div
                    className="flex w-fit rounded-lg p-1 border gap-1"
                    style={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.07)' }}
                >
                    {tabs.map(tab => {
                        const count = projects.filter(p => p.status === tab.id).length;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="flex items-center gap-1.5 px-2 sm:px-4 py-2 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-widest transition-all duration-200"
                                style={{
                                    backgroundColor: isActive ? '#00f2ff' : 'transparent',
                                    color: isActive ? '#000000' : '#6b7280',
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) e.currentTarget.style.color = '#00f2ff';
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) e.currentTarget.style.color = '#6b7280';
                                }}
                            >
                                <span>{tab.label}</span>
                                <span
                                    className="px-1.5 py-0.5 rounded-full text-xs"
                                    style={{
                                        backgroundColor: isActive ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.07)',
                                        color: isActive ? '#000' : '#9ca3af',
                                    }}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Project cards grid */}
            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                        githubUrl={project.githubUrl}
                        url={project.url}
                    />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 mt-20 text-center">
                <p className="text-gray-600 text-xs mb-4 uppercase tracking-widest">
                    End of listing. More projects on version control.
                </p>
                <a
                    href="https://github.com/SeunScape"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 pb-1 border-b text-xs uppercase tracking-widest transition-colors"
                    style={{ color: '#00f2ff', borderColor: '#00f2ff' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = '#00f2ff'}
                >
                    <span>Access All Repos</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>

            <img src={hr} className="w-full mt-8 md:h-2" alt="Horizontal Rule" />
        </section>
    );
}