
import hr from "../assets/curve-hr.svg"
import CertCardTwo from "./CertCardTwo"
import ciscoCert from "../assets/certs/ciscoCert.png"

export default function Honors(){
    return (
        <div id="honors" className="mt-20 text-white text-center" style={{ fontFamily: 'JetBrains Mono'}}> 
        <h1 className="text-2xl font-bold">Certifications</h1>
        <p className="font-light text-gray-400">Here are some of my certifications</p>

        <div id="certifications" className="flex flex-col items-center justify-center mt-8 mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="md:w-1/2">
                    <img src="/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" alt="Certification 1" className="w-40 md:max-w-xs h-auto mb-4 md:mb-0 mx-auto" />
                    <p className="text-center">AWS Certified Cloud Practitioner</p>
                    <div>View credential <span className="text-teal-500"><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential">here</a></span></div>
                    <div>credential id : V16GPSM1VERQQZG1</div>
                </div>

                <div className="md:w-1/2">
                    <img src="/image.png" alt="Certification 1" className="w-40 md:max-w-xs h-auto mb-4 md:mb-0 mx-auto" />
                    <p className="text-center">AWS Cloud Quest: Cloud Practitioner</p>
                    <div>View credential <span className="text-teal-500"><a href="https://www.linkedin.com/posts/seun-alabi-9090041b1_aws-cloud-quest-cloud-practitioner-was-issued-activity-7120435316011798530-V88r?utm_source=share&utm_medium=member_desktop">here</a></span></div>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1Mk5-f3qjU8p-b91kBAN1dsYY2cPt41RN/view">
                <div className="grid grid-cols-1 justify-center mt-6 gap-5">
                    <CertCardTwo img={ciscoCert} name="Cisco Networking Essentials" issued="Cisco Networking Academy" date="Jan 2022" />
                </div>
            </a>
            </div>

        <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>

    )
}
