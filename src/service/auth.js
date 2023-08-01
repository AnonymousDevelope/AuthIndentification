import axios from "./axios";

const AuthService = {
    async register(user){
       await axios.post('/users',{user}).catch(err => console.log(err?.response?.data?.errors?.username))
    }
}
export default AuthService;