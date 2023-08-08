import axios from "axios";
import { getToken } from "../JWT/tokenPersent";
axios.defaults.baseURL = "http://localhost:3000/api";
axios.interceptors.request.use(config=>{
    const token = getToken("token");
    const authorazition = token ? `Token ${token}` : "";
    config.headers.Authorization = authorazition;
    return config
})
export default axios;
