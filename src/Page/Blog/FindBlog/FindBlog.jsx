const FindBlog = () => {
    return (
        <div className="w-full p-10">
            <div className="flex justify-center items-center mb-10">
            <input className="w-1/2 h-10 rounded-[35px] mt-5 px-5" type="url" placeholder="Search" />
            </div>
            <div className="hero min-h-fit border-solid border-2 p-5 bg-[#1d344a] hover:bg-[#1d344a] border-white ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2 flex items-center justify-center">
                   <div>
                   <img src="https://i.ibb.co/7vVnKRr/image.png" className=" w-48 h-48 rounded-lg shadow-2xl" />
                   </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-start flex-col">
                        <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn ">Read Now</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-fit border-solid border-2 p-5 mt-10 bg-[#1d344a] hover:bg-[#1d344a] border-white ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2 flex items-center justify-center">
                   <div>
                   <img src="https://i.ibb.co/7vVnKRr/image.png" className=" w-48 h-48 rounded-lg shadow-2xl" />
                   </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-start flex-col">
                        <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn ">Read Now</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10">
            <button className="btn ">View More..</button>
            </div>
        </div>
    );
};

export default FindBlog;