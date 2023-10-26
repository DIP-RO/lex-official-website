

const Subscribe = () => {
    return (
        <div
           
            className="sm:hidden border-solid border-[#e5e7eb] bg-[#1d344a] flex flex-row justify-center gap-12  h-56 items-center border w-3/4 py-10 my-10 mx-auto  rounded"
        >
            <div className="flex flex-col items-start">
                <div className="text-3xl font-['Segoe_UI'] font-bold leading-[36px] text-white">
                    Subscirebe for E-mail NewsLetter
                </div>
                <div className="font-['Segoe_UI'] leading-[24px] text-white">
                    We daily send a news letter about the current stocks sports bike.
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <div
                   
                    className="border-solid border-[#e5e7eb] bg-white flex flex-col w-[320px] shrink-0 h-10 items-start pl-3 py-2 border rounded"
                >
                    <div className="text-sm font-['Segoe_UI'] text-[#9ca3af]">Subscribe</div>
                </div>
                <button
                    
                    className="border-solid border-white self-start flex flex-col h-10 items-center py-2 border rounded"
                >
                    <div className="text-center font-['Segoe_UI'] font-semibold leading-[24px] text-white mx-4">
                        Subscribe
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Subscribe;