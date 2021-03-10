import React from "react"
import PostCard from "../../components/PostCard/PostCard"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import {BASE_URL} from "../../constants/urls"
import {PostsFeedContainer, AddPostButton} from "./styled"
import {Add} from "@material-ui/icons"
import { useHistory } from "react-router"
import {goToAddPost, goToPostDetail} from "../../routes/coordinator"
import Loading from "../../components/Loading/Loading"


const PostsFeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/image/all`)

    const onClickCard = (id) => {
        goToPostDetail(history, id)
    }

    const postCards = posts.map((post) => {
        return(
            <PostCard 
                key={post.id}
                title={post.subtitle}
                image={post.file}
                onClick={() => onClickCard(post.id)}
            />
        )
    })
    
    return(
        <PostsFeedContainer>
            {postCards.length > 0 ? postCards : <Loading/>}
            <AddPostButton
                color={"primary"}
                onClick={() => goToAddPost(history)}
            >
                <Add/>
            </AddPostButton>
        </PostsFeedContainer>
    )
}

export default PostsFeedPage