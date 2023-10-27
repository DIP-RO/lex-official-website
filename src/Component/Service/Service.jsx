const Service = () => {

    const service = [
        {
            id: 1,
            img: "https://i.ibb.co/YQXJ6YR/image.png",
            title: "Land Law",
            description: "It is a long established fact that areader will be distracted by the readable content of a page when looking."
        },
        {
            id: 2,
            img: "https://i.ibb.co/YQXJ6YR/image.png",
            title: "Civil Law",
            description: "It is a long established fact that areader will be distracted by the readable content of a page when looking."
        },
        {
            id: 3,
            img: "https://i.ibb.co/YQXJ6YR/image.png",
            title: "Criminal Law",
            description: "It is a long established fact that areader will be distracted by the readable content of a page when looking."
        },
        {
            id: 4,
            img: "https://i.ibb.co/YQXJ6YR/image.png",
            title: "Education Law",
            description: "It is a long established fact that areader will be distracted by the readable content of a page when looking."
        },
        {
            id: 5,
            img: "https://i.ibb.co/YQXJ6YR/image.png",
            title: "Business Law",
            description: "It is a long established fact that areader will be distracted by the readable content of a page when looking."
        },
        {
            id: 6,
            img: "https://i.ibb.co/YQXJ6YR/image.png",
            title: "Real Estate Law",
            description: "It is a long established fact that areader will be distracted by the readable content of a page when looking."
        },
    ]
    return (
        <div className="sm:max-w-sm sm:mx-2 sm:mt-3">
            <h1 className="text-xl font-bold text-black sm:ml-10 sm:text-start lg:text-center mb-5">Our Services:</h1>
            <div className=" lg:my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-5  sm:gap-2 ">
            {service.map((service) => (
                <div key={service.id} className="">
                    <div className="flex relative">
                        <div className="absolute card lg:w-96 lg:m-10 border-dashed border-2 lg:h-[280px] sm:h-52 border-white hover:border-solid sm:w-full">
                            <figure className="px-10 pt-10">
                                <img src={service.img} alt={service.title} className="rounded-xl lg:w-24 lg:h-24  sm:w-16 sm:h-16"    />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white">{service.title}</h2>
                                <p className="text-white hover:disabled:  sm:hidden">{service.description}</p>
                            </div>
                        </div>
                        <div className="relative w-96 z-0 lg:ml-10 lg:mt-10 sm:h-52 sm:w-full lg:h-[280px] border-2 border-black bg-gray-900 opacity-0 hover:opacity-100 rounded-2xl flex justify-center items-center">
                            <button className="animate-bounce btn bg-[#1d344a] hover:bg-[#1d344a] text-white">Consult Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Service;