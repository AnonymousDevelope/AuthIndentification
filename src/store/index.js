
import {createStore} from "vuex"
import auth from "../modules";
const store = createStore({
   modules: {
       auth,
   }
})


export default store;