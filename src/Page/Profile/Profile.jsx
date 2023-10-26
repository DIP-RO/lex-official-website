import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Profile = () => {

    const {user} = useContext(AuthContext);
    return (
        <div className=" flex-1 justify-center items-center m-20">
            {
                user?.displayName?
                <div>
                    
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} alt=''/>
                        </div>
                        </div>
                        <h1 className='text-white'>{user.displayName}</h1>
                        <h1 className='text-white'>Everything is coming soon ...</h1>
                </div>
                :
                <h1>name</h1>
            }
        </div>
    );
};

export default Profile;