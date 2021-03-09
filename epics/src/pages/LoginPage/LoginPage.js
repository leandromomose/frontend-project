import React from "react"
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo-foto.jpg"
import Button from "@material-ui/core/Button"
import LoginForm from "./LoginForm"
import { useHistory } from "react-router"
import {goToSignUp} from "../../routes/coordinator"

const LoginPage = () => {
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                >
                    Não possui conta ainda? Cadastre-se Aqui!
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage