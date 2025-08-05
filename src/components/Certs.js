import React, { useState } from "react";
import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg"

// import 

export default function Certs() {
  const [activeTab, setActiveTab] = useState('completed');

  const projects = [
    {
      id: 1,
      title: "Serverless Web Application with CI/CD and IaC (AWS)",
      description: "End-to-end implementation of serverless web application with automated visitor tracking, following production-ready cloud and DevOps best practices.\n\n• React site hosted on S3 website hosting, distributed by CloudFront, and DNS managed by Route 53\n• Serverless backend counter implemented via API Gateway, DynamoDB, and Lambda functions\n• Infrastructure as Code via AWS SAM \n• CI/CD pipelines for both frontend (CodePipeline) and backend (GitHub Actions)\n• End-to-end testing via Cypress",
      skills: ["React", "AWS S3", "CloudFront", "Route 53", "Lambda", "DynamoDB", "API Gateway", "Python", "GitHub Actions", "Cypress"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/AWS_SAM_LAMBDA_API_GATEWAY"
    },
    {
      id: 2,
      title: "Full-Stack QR Code Generator with Cloud-Native Deployment (AWS EKS)",
      description: "Developed a full-stack QR code generator featuring Next.js frontend, FastAPI backend, and cloud-native deployment on AWS EKS.\n\n• Next.js frontend with FastAPI backend for QR code generation\n• FastAPI backend with AWS S3 integration for QR code image storage and retrieval\n• Containerization with Docker for packaging the application\n• Deployment: AWS EKS for scalable and managed Kubernetes environment\n• CI/CD: Automated deployment pipeline using GitHub Actions",
      skills: ["Next.js", "FastAPI", "Python", "Docker", "Kubernetes", "AWS EKS", "AWS S3", "GitHub Actions", "CI/CD"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/QR_Code_Generator_With_Docker.git"
    },
    {
      id: 3,
      title: "Flippay - Crypto & Gift Card Management Dashboard",
      description: "I developed a static site and dashboard for a company specializing in cryptocurrency and gift card management. My primary focus was on the frontend, collaborating closely with a backend developer who provided the necessary documentation. To handle authentication and display user data on the dashboard, I integrated the Auth API and User API respectively. Leveraging React.js and Material UI, I designed the frontend pages with a modern and user-friendly interface. This project provided valuable experience in working with APIs, allowing me to gain practical insights into integrating external services seamlessly into frontend development.",
      skills: ["React.js", "Material UI", "API Integration", "Authentication", "Frontend Development", "Cryptocurrency", "Dashboard"],
      status: "others",
      Url: "Flippay.com"
    },
    {
      id: 4,
      title: "AWS VPC IP Address Manager (IPAM) with Terraform",
      description: "Implemented enterprise-grade IP address management solution for AWS workloads, automating network planning and monitoring across multiple VPCs.\n\n• Amazon VPC IPAM deployment for centralized IP address planning and tracking\n• Infrastructure as Code via Terraform\n• Cloud9 IDE used for development and testing\n• Multi-VPC IP address allocation and monitoring workflows\n•",
      skills: ["AWS VPC", "IPAM", "Terraform", "Cloud9", "IaC", "AWS Networking"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/IP_Manager_With_Terraform"
    },
    {
      id: 5,
      title: "Serverless Email Notification System with AWS SES",
      description: "Built an automated email notification system using AWS serverless services, enabling real-time message delivery triggered by events.\n\n• AWS Lambda function for serverless email processing and delivery\n• Amazon SES integration for reliable SMTP-based email sending\n• Event-driven architecture accepting dynamic recipient and message data\n• JSON event handling for flexible message content and routing\n• Automated email delivery with configurable sender and subject parameters",
       skills: ["AWS Lambda", "Amazon SES", "Python", "Boto3", "Serverless", "Event-driven Architecture", "Email Automation", "JSON"],
      status: "completed",
      githubUrl: "https://github.com/SeunScape/MessagingApp_SES_LAMBDA.git"
    },
    {
      id: 6,
      title: "Implementing the project in book 'Terraform Up & Running'",
      description: "Still in progress, following the book 'Terraform Up & Running' by Yevgeniy Brikman to implement a complete infrastructure project using Terraform.",
      skills: ["Terraform", "Infrastructure as Code", "Cloud Infrastructure", "DevOps"],
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'ongoing':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'others':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'ongoing':
        return 'Ongoing';
      case 'others':
        return 'others';
      default:
        return status;
    }
  };
  return (
    <div id="certs" className="text-white" style={{ fontFamily: 'JetBrains Mono' }}>
      <h1 className="text-2xl font-bold text-center">Projects</h1>
      <p className="font-light text-gray-400 text-center">
        Here are some of my Projects, view more on my{' '}
        <span>
          <a href="https://github.com/SeunScape" className="text-teal-500">GitHub</a>
        </span>
      </p>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8 mb-8">
        <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-teal-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
            >
              {tab.label}
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

      <div className="mt-8 space-y-6 max-w-4xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors duration-200"
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                {getStatusLabel(project.status)}
              </span>
            </div>

            {/* Project Number and Title */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {project.id}
              </div>
              <div className="flex-1 pr-20">
                <h3 className="text-xl font-semibold text-white mb-1">
                  Project {project.id}: {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.date}</p>
              </div>
            </div>

            {/* Description */}
            <div className="ml-12 mb-4">
              <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-line">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="font-medium text-white text-sm">Technologies:</span>
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.githubUrl && (
                <div>
                  <span className="text-gray-400 text-sm">
                    View source code{' '}
                    <a
                      href={project.githubUrl}
                      className="text-teal-500 hover:text-teal-400 transition-colors duration-200"
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
      {/* <p className="font-light text-gray-400 text-center">Here are some of my Projects, view more on my <span><a href="" className="text-teal-500">GitHub</a></span></p>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-start mt-4 gap-5">
                <CertCard 
                    name="Project 1: The Cloud Resume Challenge" 
                    date="December 2023 - January 2024" 
                    desc={"I deployed a React app on Amazon S3 and delivered it using CloudFront, with the Origin Access Identity (OAI) set to redirect connections from HTTP to HTTPS to ensure security. \n\n I purchased and configured a custom domain using a my names on Route 53 and created an SSL certificate from AWS Certificate Manager. Next, I set up a CloudFront distribution with S3 as the origin, pointing the domain to the cloudfront distribution. Created pipeline for frontend CI/CD in CodePipeline to deploy code to the S3 bucket and pushing to git. \n\n For the backend, I employed the AWS SAM CLI to create a visitor's counter, handling DynamoDB, Lambda functions, tests, and API Gateway. I used Python for lambda functions, Github Actions for backend CI/CD, and Cypress for end-to-end testing"}
                    link= {<a href="https://github.com/SeunScape/AWS_SAM_LAMBDA_API_GATEWAY">here</a>}
                    />
                    
                    <CertCard 
                    name="Project 2: Flippay" 
                    date="December 2022" 
                    issued="Project 1"
                    desc={"I developed a static site and dashboard for a company specializing in cryptocurrency and gift card management. My primary focus was on the frontend, collaborating closely with a backend developer who provided the necessary documentation. \n\n To handle authentication and display user data on the dashboard, I integrated the Auth API and User API respectively. Leveraging React.js and Material UI, I designed the frontend pages with a modern and user-friendly interface. \n\nThis project provided valuable experience in working with APIs, allowing me to gain practical insights into integrating external services seamlessly into frontend development."}
                    link= {<a href="">here</a>}
                    />
            </div> */}
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  )
}
