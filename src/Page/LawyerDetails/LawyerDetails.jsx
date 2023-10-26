import swal from 'sweetalert';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from '../../Context/UserContext';

const LawyerDetails = () => {

    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleAddReview = (data) => {
        const Today = Date.now();

        const today = (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Today));
        const addReview = {
            name: data.name,
            mail: user.email,
            productId: service._id,
            productName: service.name,
            rating: data.rating,
            description: data.description,
            date: today,
        };
        console.log(service._id);

        swal({
            title: "Good job!",
            text: "You Update Your Review",
            icon: "success",
            button: "DONE",
        });

    };
    
    return (
        <div className='sm:max-w-sm'>
            <div className="hero  bg-gray-900 sm:max-w-sm">
                <div className="hero-content  flex-col lg:flex-row-reverse w-fit h-fit">
                    <div className='lg:w-1/2 md:w-1/2 sm:full  '>
                        <img src="https://i.ibb.co/vh1310R/image.png" alt="" className="h-60 w-60  rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-1/2 sm:full sm:max-w-sm">
                        <h1 className="text-3xl text-white font-bold w-full">Dilruba Khan</h1>
                        <p className="py-6 text-white w-full">She is a criminal lawyer</p>
                        <div className='flex justify-center items-center'>
                        <button className='btn btn-sm mr-2'>Book Now</button>
                        <button className='btn btn-sm'>Message Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen  bg-gray-900 sm:max-w-sm">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="bg-gray-900 lg:p-11">


                        <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-6'>
                            <div className="card lg:w-96 bg-gray-900 shadow-xl sm:max-w-sm">
                                <div className="card-body">
                                    <h2 className="card-title text-white">Riyadh Mollik</h2>
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

                    </div>

                    <div className="flex justify-center  bg-gray-900 sm:max-w-sm">
                        <div className="card lg:w-96  bg-gray-900 shadow-2xl ">
                            <div className="card-body items-center text-center">
                                <h1 className="text-2xl font-bold text-white">ADD REVIEW</h1>
                                <form
                                    className="mt-6 text-center pb-6"
                                    onSubmit={handleSubmit(handleAddReview)}
                                >
                                    {
                                        user?.displayName ?
                                            <input
                                                className="input input-bordered w-full max-w-xs mt-6"
                                                placeholder="name"
                                                value={user.displayName}
                                                {...register("name", {
                                                    required: "name is required",
                                                })}
                                                type="text"
                                            /> :
                                            <input
                                                className="input input-bordered w-full max-w-xs mt-6"
                                                placeholder="name"

                                                {...register("name", {
                                                    required: "name is required",
                                                })}
                                                type="text"
                                            />
                                    }
                                    {errors.name && (
                                        <p className="text-red-600">{errors.name?.message}</p>
                                    )}

                                    <br />
                                    <input
                                        className="input input-bordered w-full max-w-xs mt-6"
                                        placeholder="rating"
                                        {...register("rating", { required: "rating is required" })}
                                        type="text"
                                    />
                                    {errors.rating && (
                                        <p className="text-red-600">{errors.rating?.message}</p>
                                    )}
                                    <br />
                                    <input
                                        className="input input-bordered w-full max-w-xs h-24 mt-6"
                                        placeholder="description"
                                        {...register("description", {
                                            required: "description is required",
                                        })}
                                        type="text"
                                    />
                                    {errors.description && (
                                        <p className="text-red-600">{errors.description?.message}</p>
                                    )}
                                    <br />

                                    <input
                                        className="btn w-full max-w-xs mt-6 "
                                        value="Submit"
                                        type="submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerDetails;