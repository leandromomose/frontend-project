export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToPostsFeed = (history) => {
    history.push("/")
}

export const goToAddPost = (history) => {
    history.push("/adicionar-post")
}

export const goToPostDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}