import {def} from "@vue/shared"
import axios from "axios"

const ArticleServices  = {
    articles(){
        return axios.get("/articles");
    }
}
export default ArticleServices;