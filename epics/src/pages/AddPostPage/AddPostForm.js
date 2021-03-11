import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddPostFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import {createPost} from "../../services/post"
import CircularProgress from '@material-ui/core/CircularProgress'

const AddPostForm = () => {
  const [form, onChange, clear] = useForm({ subtitle: "", file: "", tag: "", collection: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    createPost(form, clear, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddPostFormContainer>
        <InputsContainer>
          <TextField
            name={"subtitle"}
            value={form.subtitle}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"file"}
            value={form.file}
            onChange={onChange}
            label={'Link da imagem'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            name={"tag"}
            value={form.tag}
            onChange={onChange}
            label={'Hashtags'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            name={"collection"}
            value={form.collection}
            onChange={onChange}
            label={'Coleção'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar Post</>}
        </Button>
      </AddPostFormContainer>
    </form>
  )
}

export default AddPostForm