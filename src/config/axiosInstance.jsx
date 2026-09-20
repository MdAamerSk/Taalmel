import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(     // intercept the response from the server
  (response) => response,                    // return the response if it's successful
  async (error) => {
    let originalReq = error.config;    // get the original request that caused the error

    if (error.response.status === 401 && !originalReq.retry) {  // if the error is 401 and the request has not been retried yet
      originalReq.retry = true;

      try {
        await axiosInstance.get("/auth/get-accessToken"); // get a new access token
        return axiosInstance(originalReq);                // retry the original request with the new access token
      } catch (error) {                                   // if the refresh token is invalid or expired, redirect to login page
        window.location.href = "/";
        return Promise.reject(error);
      }
    }
  }
);