import {useEffect, useState} from "react"
import axios from "axios"

const useRequestData = (initialdata, url) => {
    const [data, setdata] = useState(initialdata)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setdata(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [url])

    return(data)
}

export default useRequestData