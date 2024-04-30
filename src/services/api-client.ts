import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4d1ea036349840b38473437c5e37f9d6'
    }
})