import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"


const PostsFeedPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>PostsFeedPage</h1>
        </div>
    )
}

export default PostsFeedPage