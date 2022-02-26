import React from "react";
import './Login.css';
import Container from "../Components/Container";

const Login = () => {
    return (
        <Container>
            <div className="login">
                <div className="login-box">
                    <div className="top-container">
                        <div className="back-drop"></div>
                        <div className="header-container">
                            <div className="header-text">Welcome</div>
                            <div className="header-text">Back</div>
                            <div className="small-text">Please sign-in to continue!</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login