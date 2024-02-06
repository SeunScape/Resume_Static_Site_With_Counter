import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-20 text-white" style={{ fontFamily: 'JetBrains Mono'}}>
            <h1 className="text-2xl font-bold text-center">Projects</h1>
            <p className="font-light text-gray-400 text-center">Here are some of my Projects, view more on my <span><a href="">GitHub</a></span></p>

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
                    link= {<a href="https://github.com/SeunScape/AWS_SAM_LAMBDA_API_GATEWAY">here</a>}
                    />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
