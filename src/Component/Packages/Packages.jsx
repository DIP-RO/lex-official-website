import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";


const Packages = () => {
    const Packages = [
        {
            id: 1,
            title: "7 DAYS",
            images:"https://i.ibb.co/KqRC5B0/image.png"
        },
        {
            id: 2,
            title: "14 DAYS",
            images:"https://i.ibb.co/tCxFT2q/image.png"
        },
        {
            id: 3,
            title: "21 DAYS",
            images:"https://i.ibb.co/TBR75Hw/image.png"
        }   
    ];
    <Loading/>
    return (
        <div className="flex flex-col w-full bg-[#1d344a]">
            <h1 className="text-center text-5xl font-['Open_Sans'] font-bold text-white mt-10 ">PACKAGES</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 md:gap-5 grid-cols-3 lg:gap-6 sm:gap-2 mt-10 lg:mx-5 p-2">
                {Packages.map((data) => (
                    <Link key={data.id} to='coming-soon'>
                    <button
                        
                        className="bg-[#744949] hover:bg-[#744949] btn flex flex-col sm:p-3 sm:gap-5 lg:gap-20   lg:h-[350px] sm:h-fit w-full items-center lg:py-12 rounded-[29px]  mb-12 "
                    >
                        <img src={data.images} className="lg:w-24 sm:w-16" />
                        <h1 className="lg:text-5xl sm:text-lg font-['Open_Sans'] font-bold text-white  text-center  sm:mb-5">
                            {data.title}
                        </h1>
                    </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Packages;