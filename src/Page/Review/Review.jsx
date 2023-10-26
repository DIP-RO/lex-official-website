

const Review = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-6 m-10'>
            <div className="card w-96 bg-gray-900 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-white">Dilruba Khan</h2>
                    <p className="text-white">
                        17-05-2023
                    </p>
                    <p className="text-white">
                        4.5
                    </p>
                    <p className="text-white">
                        He is a wonderful lawyer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;