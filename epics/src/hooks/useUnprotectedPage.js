import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToPostsFeed } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            goToPostsFeed(history)
        }
    }, [history])
}

export default useUnprotectedPage