export const getToken=(key)=>{
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log("have error of get data")
        return null;
    }
}
export const setToken = (key,data)=>{
    try {
       localStorage.setItem(key,JSON.stringify(data))
    } catch (error) {
        console.log("have error of set data")
        
    }
}
export const removeToken = (key)=>{
    try {
       localStorage.removeItem(key)
    } catch (error) {
        console.log("have error of remove data")
        
    }
}
