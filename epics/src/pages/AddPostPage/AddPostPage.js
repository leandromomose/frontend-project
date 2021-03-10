import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { PostContainer, ScreenContainer } from './styled'
import AddPostForm from './AddPostForm'
import Typography from '@material-ui/core/Typography'

const AddPostPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <PostContainer>
        <Typography 
            gutterBottom variant={'h4'} 
            align={'center'} 
            color={'textPrimary'}
        >
            Adicionar Novo Post
        </Typography>
        <AddPostForm/>
      </PostContainer>
    </ScreenContainer>
  )
}

export default AddPostPage