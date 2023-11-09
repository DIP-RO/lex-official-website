import { useEffect, useState } from "react"

const useUser = email =>{
    const [isUser,setIsUser] = useState(false);
    useEffect( () =>{
        if(email){
            fetch(`http://localhost:5000/api/v1/users/users/user/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsUser(data.isUser);
            })
        }
    }, [email])
    return[isUser]
}
export default useUser;