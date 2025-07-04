const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.REACT_APP_BACKEND_URL;
console.log(API_BASE_URL,process.env.NODE_ENV)
export default API_BASE_URL;
