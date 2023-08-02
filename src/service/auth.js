import axios from "./axios";

const AuthService = {
  async register(user) {
    try {
      const response = await axios.post('/users', { user });
      return response.data; // Return the response data for further handling if needed
    } catch (err) {
      // Log and propagate the error
      console.error("Error during registration:", err);
      throw err;
    }
  }
};
export default AuthService;
