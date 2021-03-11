import axios from "axios"
import {BASE_URL} from "../constants/urls"

export const createPost = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/post/create`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            alert("Post created!")
            clear()
            setIsLoading(false)
        })
        .catch((err) => {
            alert(err.response.data.error)
            setIsLoading(false)
        })
}