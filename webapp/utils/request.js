import axios from 'axios'
import {API_URL} from './config'
export const get = (path, cb) => {
    axios.get(`${API_URL}/${path}`).then(response => {
        cb(response)
    })
}

export const post = (path, obj, cb) => {
    axios.post(`${API_URL}/${path}`, obj).then(response => {
        cb(response)
    })
}
export const post_file = (path, file, cb, er_cb = ()=>{}) => {
    axios
        .post(`${API_URL}/${path}`, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            cb(response)
        })
        .catch(err => {
            er_cb(err)
        })
}
