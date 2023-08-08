
import {createStore} from "vuex"
import articles from "../modules/articles";
import auth from "../modules";
const store = createStore({
   modules: {
       auth,
       articles
   }
})


export default store;