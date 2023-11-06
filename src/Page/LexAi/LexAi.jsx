
import { useEffect, useRef, useState } from 'react';
const LexAi = () => {


    const textAreaRef = useRef(null);
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setVal(e.target.value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val])



    return (
        <div className="flex-1 justify-center items-center ">

            <div className=" bg-[#1d344a] sm:min-h-screen min-h-screen">

                <div className="text-4xl font-['Inter'] font-semibold text-white p-5 text-center">
                    Welcome to LEX-AI
                </div>
                <div className="flex justify-center items-center ">
                    <div className="border-solid overflow-hidden  flex flex-col justify-center gap-8  items-center   sm:rounded-t-[35px] lg:rounded-[35px]   p-5 bg-white w-3/4 sm:h-screen sm:w-full">


                        <div className="w-3/4 bg-white h-72">
                           
                            <div className="chat chat-start mt-10">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://i.ibb.co/kg3X7W8/photo-2023-05-15-00-28-43.jpg" />
                                    </div>
                                </div>

                                <div className="chat-bubble bg-black text-white">Lex AI</div>

                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                            <textarea className='textarea textarea-bordered textarea-sm lg:w-96 rounded' placeholder='type something here' value={val} onChange={handleChange} rows="2" ref={textAreaRef}></textarea>
                            </div>
                            <div className="lg:mb-10">
                                <button>
                                    <img
                                        src="https://i.ibb.co/5GP4ytS/Polygon-1-1.png"
                                        id="PolygonRoot"
                                        className="origin-top-left ] w-7 h-7 mt-2"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LexAi;