export default function CertCard(props){
    return (
        <a href={props.img}>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light text-gray-400" style={{ whiteSpace: 'pre-line' }}>{props.desc}</p>
                <p className="font-light text-gray-400">View source code <span className="text-teal-500">{props.link}</span></p>
                <p className="font-light text-gray-400">{props.date}</p>
            </div>
        </div>
        </a>
    )
}
