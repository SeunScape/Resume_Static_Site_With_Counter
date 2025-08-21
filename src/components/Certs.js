import React, { useState } from "react";
import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg"

// import 

export default function Certs() {
  const [activeTab, setActiveTab] = useState('completed');

  const projects = [
      {
      id: 1,
      title: "Web App deployment and Nginx web server configuration with Terraform, Ansible, and AWS",
      description: "A production-ready, two-tier web application infrastructure built with Terraform and configured with Ansible, demonstrating DevOps best practices and infrastructure as code principles. This project was inspired by concepts from 'Terraform: Up and Running' by Yevgeniy Brikman.",
      skills: ["Terraform", "AWS EC2", "Ansible", "Load balancers", "EC2 Autoscaling", "Nginx", "RDS Mysql"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/Terraform-Ansible-AWS-Infrastructure.git"
    },
    {
      id: 2,
      title: "Serverless Web Application with CI/CD and IaC (AWS)",
      description: "End-to-end implementation of serverless web application with automated visitor tracking, following production-ready cloud and DevOps best practices.\n\n• React site hosted on S3 website hosting, distributed by CloudFront, and DNS managed by Route 53\n• Serverless backend counter implemented via API Gateway, DynamoDB, and Lambda functions\n• Infrastructure as Code via AWS SAM \n• CI/CD pipelines for both frontend (CodePipeline) and backend (GitHub Actions)\n• End-to-end testing via Cypress",
      skills: ["React", "AWS S3", "CloudFront", "Route 53", "Lambda", "DynamoDB", "API Gateway", "Python", "GitHub Actions", "Cypress"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/AWS_SAM_LAMBDA_API_GATEWAY"
    },
    {
      id: 3,
      title: "Full-Stack QR Code Generator with Cloud-Native Deployment (AWS EKS)",
      description: "Developed a full-stack QR code generator featuring Next.js frontend, FastAPI backend, and cloud-native deployment on AWS EKS.\n\n• Next.js frontend with FastAPI backend for QR code generation\n• FastAPI backend with AWS S3 integration for QR code image storage and retrieval\n• Containerization with Docker for packaging the application\n• Deployment: AWS EKS for scalable and managed Kubernetes environment\n• CI/CD: Automated deployment pipeline using GitHub Actions",
      skills: ["Next.js", "FastAPI", "Python", "Docker", "Kubernetes", "AWS EKS", "AWS S3", "GitHub Actions", "CI/CD"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/QR_Code_Generator_With_Docker.git"
    },
    {
      id: 4,
      title: "Flippay - Crypto & Gift Card Management Dashboard",
      description: "I developed a static site and dashboard for a company specializing in cryptocurrency and gift card management. My primary focus was on the frontend, collaborating closely with a backend developer who provided the necessary documentation. To handle authentication and display user data on the dashboard, I integrated the Auth API and User API respectively. Leveraging React.js and Material UI, I designed the frontend pages with a modern and user-friendly interface. This project provided valuable experience in working with APIs, allowing me to gain practical insights into integrating external services seamlessly into frontend development.",
      skills: ["React.js", "Material UI", "API Integration", "Authentication", "Frontend Development", "Cryptocurrency", "Dashboard"],
      status: "others",
      Url: "Flippay.com"
    },
    {
      id: 5,
      title: "AWS VPC IP Address Manager (IPAM) with Terraform",
      description: "Implemented enterprise-grade IP address management solution for AWS workloads, automating network planning and monitoring across multiple VPCs.\n\n• Amazon VPC IPAM deployment for centralized IP address planning and tracking\n• Infrastructure as Code via Terraform\n• Cloud9 IDE used for development and testing\n• Multi-VPC IP address allocation and monitoring workflows\n•",
      skills: ["AWS VPC", "IPAM", "Terraform", "Cloud9", "IaC", "AWS Networking"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/IP_Manager_With_Terraform"
    },
    {
      id: 6,
      title: "Serverless Email Notification System with AWS SES",
      description: "Built an automated email notification system using AWS serverless services, enabling real-time message delivery triggered by events.\n\n• AWS Lambda function for serverless email processing and delivery\n• Amazon SES integration for reliable SMTP-based email sending\n• Event-driven architecture accepting dynamic recipient and message data\n• JSON event handling for flexible message content and routing\n• Automated email delivery with configurable sender and subject parameters",
       skills: ["AWS Lambda", "Amazon SES", "Python", "Boto3", "Serverless", "Event-driven Architecture", "Email Automation", "JSON"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/MessagingApp_SES_LAMBDA.git"
    },
    {
      id: 7,
      title: "Kubernetes Operators",
      description: "Still in progress, following the hands-on course on Linux Handbook to implement a practical usecase scenerio of Kubernetes Operators",
      skills: ["Kubernetes", "Python", "Cloud Infrastructure", "DevOps"],
      status: "ongoing",
      githubUrl: "#"
    }
  ];

  const tabs = [
    { id: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
    { id: 'ongoing', label: 'Ongoing', count: projects.filter(p => p.status === 'ongoing').length },
    { id: 'others', label: 'others', count: projects.filter(p => p.status === 'others').length }
  ];

  const filteredProjects = projects.filter(project => project.status === activeTab);

  return (
    <div id="certs" className="text-white px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'JetBrains Mono' }}>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Projects</h1>
      <p className="font-light text-gray-400 text-center text-sm sm:text-base mt-2">
        Here are some of my Projects, view more on my{' '}
        <span>
          <a href="https://github.com/SeunScape" className="text-teal-500 hover:text-teal-400 transition-colors">GitHub</a>
        </span>
      </p>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-6 sm:mt-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row bg-gray-800 rounded-lg p-1 border border-gray-700 w-full max-w-sm sm:max-w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-between sm:justify-center gap-2 mb-1 sm:mb-0 last:mb-0
          ${activeTab === tab.id
                ? 'bg-teal-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-600 text-gray-300'
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-gray-600 transition-colors duration-200"
          >
            {/* Project Title */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">{project.date}</p>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 whitespace-pre-line">
                {project.description}
              </p>

              {/* Skills */}
              <div className="mb-3 sm:mb-4">
                <span className="font-medium text-white text-xs sm:text-sm block mb-2">Technologies:</span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              {project.githubUrl && project.githubUrl !== "#" && (
                <div>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    View source code{' '}
                    <a
                      href={project.githubUrl}
                      className="text-teal-500 hover:text-teal-400 transition-colors duration-200 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* HR Image */}
      <img src={hr} className="w-full mt-6 sm:mt-8 h-1 sm:h-2" alt="hr" />
    </div>
  )
}