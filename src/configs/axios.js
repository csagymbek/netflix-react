import axios from "axios";

// base url to make requests to the movie database 
export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});