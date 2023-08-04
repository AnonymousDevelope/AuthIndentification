import axios from "./axios";

const AuthService = {
  async register(user) {
    try {
      const response = await axios.post('/users', {user});
      return response; // Return the response data for further handling if needed
    } catch (err) {
      // Log and propagate the error
      console.error("Error during registration:", err);
      throw err;
    }
  },
  async login(user) {
    try {
      const response = await axios.post('/users/login', {user});
      return response; // Return the response data for further handling if needed
    } catch (err) {
      // Log and propagate the error
      console.error("Error during login:", err);
      throw err;
    }
  },
  getUSer() {
    return axios.get('/user');
  }
};
export default AuthService;
