import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const PostsFeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`

export const AddPostButton = styled(Button)`
  position: fixed !important;
  right: 50px;
  bottom: 60px;
  z-index: 3;
`