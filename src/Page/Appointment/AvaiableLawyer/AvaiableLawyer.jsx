import { Link } from "react-router-dom";

const AvaiableLawyer = () => {
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
        }
    ]

    return (
        <div className="h-[450px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-14 mt-10 ">
                    {testymony.map((testy) => (
                        <Link  key={testy.id} to="/lawyardetails">
                        <button
                           
                
                            className="flex btn flex-col gap-5 w-[270px] h-[350px] items-center p-8 rounded-[22px] bg-[#1d344a] hover:bg-[#1d344a]"
                        >
                            <img src={testy.image} className="w-[75px] h-[75px] rounded-full online" />
                            <div className="text-center font-['Montserrat'] font-bold tracking-[2] leading-[19.2px] uppercase text-[#bdcdf1] mb-0">
                                {testy.name}
                            </div>
                            <div className="text-center font-['Open_Sans'] leading-[25.6px] text-white">
                                {testy.message}
                            </div>
                        </button>
                        </Link>
                    ))}
                </div>
    );
};

export default AvaiableLawyer;