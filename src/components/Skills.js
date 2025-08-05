import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import tailwind from "../assets/skills/tailwind.svg"
import windows from "../assets/skills/windows.svg"
import node from "../assets/skills/nodejs.svg"
import react from "../assets/skills/react.svg"
import git from "../assets/skills/git.svg"
import aws from "../assets/skills/aws-svgrepo-com.svg"
import mongo from "../assets/skills/mongodb-svgrepo-com.svg"
import terraformio from "../assets/skills/terraform-icon-svgrepo-com.svg"

import hr from "../assets/curve-hr.svg"
    
export default function Skills() {
    return (
        <div id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'JetBrains Mono'}}>
                        Technical Skills
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Tools and languages I've worked with
                    </p>
                </div>

                {/* Skills List Section */}
                <div className="flex justify-center mb-16">
                    <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 shadow-lg backdrop-blur-sm">
                        <ul className="list-none text-left space-y-4 text-gray-200">
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                <strong className="text-blue-400">Cloud Platforms:</strong> 
                                <span>AWS, Azure</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                                <strong className="text-green-400">Infrastructure-as-code:</strong>
                                <span>Terraform, CloudFormation, Ansible, SAM</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-yellow-500 rounded-full"></span>
                                <strong className="text-yellow-400">Scripting:</strong>
                                <span>Bash, Python</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
                                <strong className="text-purple-400">Containerization:</strong>
                                <span>Docker, Kubernetes, ECS</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                                <strong className="text-red-400">Operating systems:</strong>
                                <span>Linux, Windows</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
                                <strong className="text-indigo-400">CI/CD:</strong>
                                <span>Github Actions/Jenkins</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-pink-500 rounded-full"></span>
                                <strong className="text-pink-400">Architecture:</strong>
                                <span>Draw.io, Amazon Q</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Technology Icons - Uncomment and modify as needed */}
                 <ul className="mt-4 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                <li className="text-center">
                    <img src={linux} alt={"linux"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Linux</p>
                </li>
                {/* <li className="text-center">
                    <img src={windows} alt={"windows"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Windows</p>
                </li> */}
                <li className="text-center">
                    <img src={bash} alt={"bash"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Bash</p>
                </li>    
                <li className="text-center">
                    <img src={git} alt={"git"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Git</p>
                </li>
                <li className="text-center">
                    <img src={aws} alt={"aws"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>AWS</p>
                </li>
                <li className="text-center">
                    <img src={python} alt={"python"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Python</p>
                </li>
                {/* <li className="text-center">
                    <img src={javascript} alt={"javascript"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>JavaScript</p>
                </li> */}
                {/* <li className="text-center">
                    <img src={node} alt={"node"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Node.js</p>
                </li> */}
                {/* <li className="text-center">
                    <img src={react} alt={"react"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>React</p>
                </li> */}
                {/* <li className="text-center">
                    <img src={tailwind} alt={"tailwind"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Tailwind CSS</p>
                </li> */}
                <li className="text-center">
                    <img src={terraformio} alt={"terraform"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Terraform</p>
                </li>
                {/* <li className="text-center">
                    <img src={mongo} alt={"mongo"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>MongoDB</p>
                </li> */}
            </ul>

                <img src={hr} className="w-full h-3 mt-16 opacity-50" alt="hr" />
            </div>
        </div>
    );
}
