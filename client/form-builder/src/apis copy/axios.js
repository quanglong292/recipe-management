import axios from "axios";

// Create a new Axios instance with custom configuration
const api = axios.create({
  baseURL: "http://localhost:8080/api/", // Set the base URL for your API
  timeout: 5000, // Set a timeout (in milliseconds) for requests
  headers: {
    "Content-Type": "application/json", // Set the default content type for requests
    // Add any other headers you need, such as authentication tokens
  },
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
