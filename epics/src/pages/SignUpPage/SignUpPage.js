import React from "react"
import logo from "../../assets/logo-foto.jpg"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import SignUpForm from "./SignUpForm"
import { LogoImage, ScreenContainer } from "./styled"

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage