import axios from "axios";

export const baseURL = "http://localhost:5001/foodorderapp-4b92b/us-central1/app";

export const validateUserJWTToken = async (token) => {
    try {
        const res = await axios.get('http://localhost:5001/foodorderapp-4b92b/us-central1/app/api/users/jwtVerification', {
            headers : {Authorization : "Bearer " + token}
        })
        return res.data.data;

    }
    catch (err)
    {
        return null;
    }
}