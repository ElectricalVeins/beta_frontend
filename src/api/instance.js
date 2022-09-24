import axios from "axios"

export default axios.create({
    baseURL:'localhost:4000',
    timeout: 30000,
});
