import React from "react"
import { Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostsFeedPage from "../pages/PostsFeedPage/PostsFeedPage"
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage"
import AddPostPage from "../pages/AddPostPage/AddPostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = ({setRightButtonText}) => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path="/">
                <PostsFeedPage />
            </Route>
            <Route exact path="/adicionar-post">
                <AddPostPage />
            </Route>
            <Route exact path="/detalhe/:id">
                <PostDetailPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router