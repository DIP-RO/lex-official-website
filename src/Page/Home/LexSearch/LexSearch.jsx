const LexSearch = () => {
    return (
        <div className="xl:hidden md:hidden lg:hidden max-w-sm flex justify-center items-center gap-5 p-5">
            <div>
                    <h1 className=" text-3xl font-extrabold text-white ">Lex.Ai</h1>
            </div>
            <div>
                <input type="text" placeholder="Search" className="w-full h-10 px-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>


        </div>
    );
};

export default LexSearch;