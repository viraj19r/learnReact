import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID ZFwBFZfCCGcMg8xeT7UcSWrjBdhFPg9-bBE_UgCSbqk",
      }
})