import { Link } from "react-router-dom";

const DashboardHome = () => {

    const data = [
        {
            id: 1,
            name: "Ask Your Queries",
            button:"ASK NOW",
            image: "https://file.rendit.io/n/xzPvYK0ASBiT4vCI4R94.png",
        },
        {
            id: 2,
            name: "Find Lawyer",
            button:"FIND NOW",
            image: "https://file.rendit.io/n/N1st8uHG6EHq8cG7c73L.png",
        },
        {
            id: 3,
            name: "Get Drafted",
            button:"DRAFT NOW",
            image: "https://file.rendit.io/n/qhpGQ3teD0v7NZXT5BMR.png",
        },
        {
            id: 4,
            name: "Know Your Rights",
            button:"KNOW NOW",
            image: "https://file.rendit.io/n/daL28ImZoXmOchrX9fzz.png",
        },
        
    ];


    return (
        <>
            <div className="text-3xl font-['Raleway'] leading-[38px] text-white w-full m-10">
                Hello Md riyadh! Let&apos;s get started.
            </div>
            <div className="flex flex-wrap justify-center">
            {data.map((item) => (
                <div key={item.id} className="flex w-5/12 h-fit m-5 bg-[#da1e37] rounded-lg">
                    <div className="w-1/2 flex justify-center items-center">
                        <div>
                            <div className="text-lg font-['Raleway'] font-bold leading-[20.9px] text-white w-full">
                                {item.name}
                            </div>
                            <Link to="/dashboard/comming">
                            <button className="text-center w-24 h-10 mt-3 btn text-xs font-['Raleway'] leading-[12px] bg-white text-[#da1e37]">
                                {item.button}
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={item.image} className="self-start w-[150px] py-10" />
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default DashboardHome;