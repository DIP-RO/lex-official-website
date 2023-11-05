import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useState } from "react";
import ReviewCard from "../../Global/ReviewCard/ReviewCard";


const Review = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch(`https://attractive-ruby-cow.cyclic.app/api/v1/reviews/reviews/userEmail/${user.email}`)
            .then((response) => response.json())
            .then((data) => setReview(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, [user.email]);



    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-6 lg:m-10'>
            {
                reviews.map((review) => (
                    <ReviewCard
                        review={review}
                        key={review._id}
                    >

                    </ReviewCard>
                ))
            }

        </div>
    );
};

export default Review;