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
        <div id="skills" className="mt-4 text-white text-center" style={{ fontFamily: 'JetBrains Mono'}}>
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <ul className="mt-4 grid grid-cols-6 gap-10">
                <li className="text-center">
                    <img src={linux} alt={"linux"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Linux</p>
                </li>
                <li className="text-center">
                    <img src={windows} alt={"windows"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Windows</p>
                </li>
                <li className="text-center">
                    <img src={bash} alt={"bash"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Bash</p>
                </li>
                <li className="text-center">
                    <img src={git} alt={"git"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Git</p>
                </li>
                <li className="text-center">
                    <img src={aws} alt={"aws"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>AWS</p>
                </li>
                <li className="text-center">
                    <img src={python} alt={"python"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Python</p>
                </li>
                <li className="text-center">
                    <img src={javascript} alt={"javascript"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>JavaScript</p>
                </li>
                <li className="text-center">
                    <img src={node} alt={"node"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Node.js</p>
                </li>
                <li className="text-center">
                    <img src={react} alt={"react"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>React</p>
                </li>
                <li className="text-center">
                    <img src={tailwind} alt={"tailwind"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Tailwind CSS</p>
                </li>
                <li className="text-center">
                    <img src={terraformio} alt={"terraform"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>Terraform</p>
                </li>
                <li className="text-center">
                    <img src={mongo} alt={"mongo"} className="mx-auto mb-2" width="70" height="70"/>
                    <p>MongoDB</p>
                </li>
            </ul>
        </div>

        // </div>
        //      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        // </div>
    )
}