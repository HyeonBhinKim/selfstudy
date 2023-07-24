import axios from "axios";

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "4f283c17aa520d77c8918bcf661179b6",
        language: "ko-KR",
    }
})

export default instance;