import React from "react"
import { useParams } from "react-router"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { ScreenContainer, PostContainer, PostImage } from "./styled"
import Typography from "@material-ui/core/Typography"
import Loading from "../../components/Loading/Loading"


const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const post = useRequestData({}, `${BASE_URL}/post/${params.id}`)

    return (
        <ScreenContainer>
            {post ?
                <PostContainer>
                    <PostImage src={post.file} />
                    <Typography
                        gutterBottom align={"center"}
                        variant={"h5"}
                        color={"primary"}
                    >
                        {post.subtitle}
                    </Typography>
                    <Typography
                        align={"center"}
                    >
                        {post.collection}
                    </Typography>
                    <Typography
                        align={"center"}
                    >
                        {post.date}
                    </Typography>
                </PostContainer>
            : 
                <Loading/>
            }
        </ScreenContainer>
    )
}

export default PostDetailPage