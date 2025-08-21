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
        <div id="skills" className="py-12 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'JetBrains Mono'}}>
                        Technical Skills
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                        Tools and languages I've worked with
                    </p>
                </div>

                {/* Skills List Section */}
                <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
                    <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 border border-gray-700 shadow-lg backdrop-blur-sm w-full max-w-4xl">
                        <ul className="list-none text-left space-y-4 sm:space-y-5 text-gray-200">
                            <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    <strong className="text-blue-400">Cloud Platforms:</strong>
                                </div>
                                <span className="ml-4 sm:ml-0">AWS, Azure</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-green-500 rounded-full flex-shrink-0"></span>
                                    <strong className="text-green-400">Infrastructure-as-code:</strong>
                                </div>
                                <span className="ml-4 sm:ml-0">Terraform, CloudFormation, Ansible, SAM</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
                                    <strong className="text-yellow-400">Scripting:</strong>
                                </div>
                                <span className="ml-4 sm:ml-0">Bash, Python</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                                    <strong className="text-purple-400">Containerization:</strong>
                                </div>
                                <span className="ml-4 sm:ml-0">Docker, Kubernetes, ECS</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-red-500 rounded-full flex-shrink-0"></span>
                                    <strong className="text-red-400">Operating systems:</strong>
                                </div>
                                <span className="ml-4 sm:ml-0">Linux, Windows</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                    <strong className="text-indigo-400">CI/CD:</strong>
                                </div>
                                <span className="ml-4 sm:ml-0">Github Actions/Jenkins</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                                    <strong className="text-pink-400">Architecture:</strong>
                                </div>
                                <span className="ml-4 sm:ml-0">Draw.io, Amazon Q</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Technology Icons - Hidden on mobile, shown on larger screens */}
                <ul className="hidden sm:grid mt-4 grid-cols-3 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                    <li className="text-center">
                        <img src={linux} alt={"linux"} className="mx-auto mb-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        <p className="text-xs sm:text-sm text-gray-300">Linux</p>
                    </li>
                    <li className="text-center">
                        <img src={bash} alt={"bash"} className="mx-auto mb-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        <p className="text-xs sm:text-sm text-gray-300">Bash</p>
                    </li>    
                    <li className="text-center">
                        <img src={git} alt={"git"} className="mx-auto mb-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        <p className="text-xs sm:text-sm text-gray-300">Git</p>
                    </li>
                    <li className="text-center">
                        <img src={aws} alt={"aws"} className="mx-auto mb-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        <p className="text-xs sm:text-sm text-gray-300">AWS</p>
                    </li>
                    <li className="text-center">
                        <img src={python} alt={"python"} className="mx-auto mb-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        <p className="text-xs sm:text-sm text-gray-300">Python</p>
                    </li>
                    <li className="text-center">
                        <img src={terraformio} alt={"terraform"} className="mx-auto mb-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        <p className="text-xs sm:text-sm text-gray-300">Terraform</p>
                    </li>
                </ul>

                <img src={hr} className="w-full h-2 sm:h-3 mt-8 sm:mt-12 md:mt-16 opacity-50" alt="hr" />
            </div>
        </div>
    );
}