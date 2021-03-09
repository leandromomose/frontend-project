import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostsFeedPage from "../pages/PostsFeedPage/PostsFeedPage"
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage"
import AddPostPage from "../pages/AddPostPage/AddPostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage/>
                </Route>
                <Route exact path="/">
                    <PostsFeedPage/>
                </Route>
                <Route exact path="/adicionar-post">
                    <AddPostPage/>
                </Route>
                <Route exact path="/detalhe/:id">
                    <PostDetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router