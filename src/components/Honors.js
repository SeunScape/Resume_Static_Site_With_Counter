import hr from "../assets/curve-hr.svg"
import CertCardTwo from "./CertCardTwo"
import ciscoCert from "../assets/certs/ciscoCert.png"

export default function Honors(){
    return (
        <div id="honors" className="mt-12 sm:mt-16 md:mt-20 text-white text-center px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'JetBrains Mono'}}> 
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400 text-sm sm:text-base mt-2">Here are some of my certifications</p>

            <div id="certifications" className="flex flex-col items-center justify-center mt-6 sm:mt-8 mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center">
                    <div className="w-full md:w-1/2 max-w-sm md:max-w-none">
                        <img 
                            src="/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" 
                            alt="AWS Cloud Practitioner Certification" 
                            className="w-32 sm:w-36 md:w-40 lg:w-48 h-auto mb-3 sm:mb-4 mx-auto" 
                        />
                        <p className="text-center text-sm sm:text-base font-medium mb-2">AWS Certified Cloud Practitioner</p>
                        <div className="text-xs sm:text-sm text-gray-300 mb-1">
                            View credential <span className="text-teal-500"><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential" className="hover:text-teal-400 transition-colors">here</a></span>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 break-all">
                            credential id: V16GPSM1VERQQZG1
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 max-w-sm md:max-w-none">
                        <img 
                            src="/AWS-Certified-Solutions-Architect-Associate_badge.png" 
                            alt="AWS Solutions Architect Associate Certification" 
                            className="w-32 sm:w-36 md:w-40 lg:w-48 h-auto mb-3 sm:mb-4 mx-auto" 
                        />
                        <p className="text-center text-sm sm:text-base font-medium mb-2">AWS Certified Solutions Architect - Associate</p>
                        <div className="text-xs sm:text-sm text-gray-300">
                            View credential <span className="text-teal-500"><a href="https://www.credly.com/badges/4bc24bc8-e68e-44a3-952e-810ee84e81da/public_url" className="hover:text-teal-400 transition-colors">here</a></span>
                        </div>
                    </div>
                </div>
                
                <a href="https://drive.google.com/file/d/1Mk5-f3qjU8p-b91kBAN1dsYY2cPt41RN/view" className="w-full max-w-md md:max-w-lg">
                    <div className="grid grid-cols-1 justify-center mt-6 sm:mt-8 gap-5">
                        <CertCardTwo 
                            img={ciscoCert} 
                            name="Cisco Networking Essentials" 
                            issued="Cisco Networking Academy" 
                            date="Jan 2022" 
                        />
                    </div>
                </a>
            </div>

            <img src={hr} className="w-full mt-6 sm:mt-8 md:mt-10 h-1 sm:h-2" alt="hr" />
        </div>
    )
}