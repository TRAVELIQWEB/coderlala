import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEST_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default api;



// const api = axios.create({
//   baseURL: "http://192.168.1.184:4003",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 🔥 Automatically add token to all requests
// api.interceptors.request.use(
//   (config) => {
//     if (typeof window !== "undefined") {
//       const token = localStorage.getItem("access_token"); // your token key

//       if (token) {
//         config.headers.Authorization = Bearer ${token};
//       }
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;