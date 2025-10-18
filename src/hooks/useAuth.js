import { useEffect, useState } from "react";
import api_clients from "../services/api_clients";

const useAuth = () =>{
    const [user, setUser] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const getToken = ()=>{
        const token= localStorage.getItem('authTokens');
        return token ? JSON.parse(token):null;
    };

    const [authTokens, setAuthTokens] = useState(getToken());
    
    useEffect(() => {
        if (authTokens) fetchUserProfile();
    }, [authTokens]);

      // Fetch user Profile
    const fetchUserProfile = async () => {
        try {
        const response = await api_clients.get("/auth/users/me", {
            headers: { Authorization: `JWT ${authTokens?.access}` },
        });
        setUser(response.data);
        } catch (error) {
        console.log("Error Fetching user", error);
        }
    };

    //Update User Profile
    const updateUserProfile = async(data)=>{
        setErrorMsg("");
        try{
            api_clients.put('/auth/users/me/', data, 
                {headers:{Authorization: `JWT ${authTokens?.access}`}}
            );

        }catch(error){
            console.log(error);
        }
    }

    //Change Password
    const changePassword = (data)=>{
        try{
            api_clients.post('/auth/users/set_password/',data, {
                headers:{Authorization: `JWT ${authTokens?.access}`}
            })
        }catch(error){
            console.log(error);
        }
    }

    //Login User
    const loginUser = async (userData) =>{
        setErrorMsg("");
        try{
            const response = await api_clients.post('/auth/jwt/create',userData);
            setAuthTokens(response.data);
            localStorage.setItem("authTokens",JSON.stringify(response.data));
            //After login set user
            await fetchUserProfile();
        }catch(error){
            setErrorMsg(error.response.data?.detail);
        }
    };

    //user registration
    const registerUser = async(userData) =>{
        setErrorMsg("")
        try{
           await api_clients.post('/auth/users/', userData);
           return{
            success:true,
            message:"Registration Successful. Check your email to activate account. Redirecting ...",
           };
        }catch(error){
            if(error.response && error.response.data ){
                const errorMessage = Object.values(error.response.data).flat().join("\n");
                setErrorMsg(errorMessage);
                return {success: false, message:errorMessage};
            }
            setErrorMsg("Registration Failed. Please try again");
        }
    };

    //Logout User
    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
    };
    

    return {
        user, 
        errorMsg, 
        loginUser,
        logoutUser, 
        registerUser, 
        updateUserProfile,
        changePassword,
     };
};
export default useAuth;