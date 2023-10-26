const Lawyer = () => {
    const lawyers = [
        {
            id: 1,
            name: "Md. Tarim Chowdhury",
            img: "https://i.ibb.co/GsVSGYW/image.png",
            designation: "Lawyer"
        },
        {
            id: 2,
            name: "Dilruba Khan",
            img: "https://i.ibb.co/vh1310R/image.png",
            designation: "Lawyer"
        },
        {
            id: 3,
            name: "Jalkarin Iqbal",
            img: "https://i.ibb.co/c1cRL4p/image.png",
            designation: "Lawyer"
        },
    ]

    return (
        <div className="flex flex-col justify-center items-center gap-10 sm:hidden">
            <div className="h-[550px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {lawyers.map((lawyer) => (
                <div key={lawyer.id} className="flex flex-col items-center justify-center p-5">
                    <img className=" w-[300px] h-[350px] rounded-3xl" src={lawyer.img} alt="" />
                    <h1 className="text-2xl font-bold text-center mt-2 text-white">{lawyer.name}</h1>
                    <h3 className="text-xl font-bold text-center text-white">{lawyer.designation}</h3>
                </div>
            ))}
        </div>
        <button className="btn bg-[#1d344a] hover:bg-[#1d344a]  mt-[-75px] text-white my-10">SEE MORE</button>
        </div>

    );
};

export default Lawyer;