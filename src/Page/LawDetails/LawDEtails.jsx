import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const LawDetails = () => {
    const { id } = useParams();

    const [data, setData] = useState({});
    const [related, setRelated] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/lawData/lawData/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching law data:", error));
    }, [id]);

    useEffect(() => {
        if (data?.Problem) {
            fetch(`http://localhost:5000/api/v1/lawData/lawDataByProblem/${data.Problem}`)
                .then((response) => response.json())
                .then((data) => setRelated(data))
                .catch((error) => console.error("Error fetching related data:", error));
        }
    }, [data.Problem]);

    return (
        <div>
            <div className="w-full bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">{data.Problem}</h2>
                    <p>VICTIM: {data.Victims}</p>
                    <p>QUESTION: {data.Query}</p>
                    <p>SUGGESTION: {data.Suggestions}</p>
                    <p>LAW: {data.Law}</p>
                </div>
            </div>
            {related.map((item) => (
                <Link to={`/law-details/${item._id}`} key={item._id}>
                    <div className="w-full bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{item.Query}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default LawDetails;
