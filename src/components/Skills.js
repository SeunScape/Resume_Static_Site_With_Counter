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
        <div id="skills" className="mt-6 text-white text-center" style={{ fontFamily: 'JetBrains Mono'}}>
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="mt-4 font-light text-gray-400">Here are some of the technologies I've worked with</p>
            <ul className="mt-4 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                <li className="text-center">
                    <img src={linux} alt={"linux"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Linux</p>
                </li>
                <li className="text-center">
                    <img src={windows} alt={"windows"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Windows</p>
                </li>
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
                <li className="text-center">
                    <img src={javascript} alt={"javascript"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>JavaScript</p>
                </li>
                <li className="text-center">
                    <img src={node} alt={"node"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Node.js</p>
                </li>
                <li className="text-center">
                    <img src={react} alt={"react"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>React</p>
                </li>
                <li className="text-center">
                    <img src={tailwind} alt={"tailwind"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Tailwind CSS</p>
                </li>
                <li className="text-center">
                    <img src={terraformio} alt={"terraform"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>Terraform</p>
                </li>
                <li className="text-center">
                    <img src={mongo} alt={"mongo"} className="mx-auto mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24" />
                    <p>MongoDB</p>
                </li>
            </ul>

        </div>

        // </div>
        //      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        // </div>
    )
}
