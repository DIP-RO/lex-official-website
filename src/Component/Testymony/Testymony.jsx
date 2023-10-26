
const Testymony = () => {

    const testymony = [
        {
            id: 1,
            name: 'stella larson',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/b7z8Z3t/image.png",
        },
        {
            id: 2,
            name: 'Olga jhonso',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/19myfyW/image.png",
        },
        {
            id: 3,
            name: 'Paul Smith',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/BZtx9Gf/image.png",
        },
        {
            id: 4,
            name: 'Nat Reynolds',
            message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            image: "https://i.ibb.co/zh2FBcS/image.png",
        },
    ]



    return (
        <div className="flex flex-col justify-center items-center my-20 sm:hidden">
                <div>
                <h1 className="text-center text-4xl font-['Orbitron'] font-bold leading-[14px] uppercase text-white w-min">TESTIMONY</h1>
                </div>
                
                <div className="h-[450px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-14 mt-10 ">
                    {testymony.map((testy) => (
                        <div
                            key={testy.id}
                
                            className="flex flex-col gap-5 w-[270px] h-[350px] items-center p-8 rounded-[22px] bg-[#1d344a]"
                        >
                            <img src={testy.image} className="w-[75px] h-[75px] rounded-full" />
                            <div className="text-center font-['Montserrat'] font-bold tracking-[2] leading-[19.2px] uppercase text-[#bdcdf1] mb-0">
                                {testy.name}
                            </div>
                            <div className="text-center font-['Open_Sans'] leading-[25.6px] text-white">
                                {testy.message}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn bg-[#1d344a] hover:bg-[#1d344a]  mt-[-75px] text-white">SEE MORE</button>
            
        </div>
    );
};

export default Testymony;