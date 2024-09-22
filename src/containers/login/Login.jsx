import "./Login.css";
import {useNavigate} from "react-router-dom";
import {useState, useContext} from "react";
import ExpenseContext from "../../context/ExpenseContext.js";
function Login() {

    const [loginPassword, setLoginPassword] = useState("");
    const [loginEmailError, setLoginEmailError] = useState("");
    const [loginPasswordError, setLoginPasswordError] = useState("");
    const [loginUsernameError, setLoginUsernameError] = useState("");

    const {loginUsername, setLoginUsername, loginEmail, setLoginEmail } = useContext(ExpenseContext);

    const navigate = useNavigate();

    const goToSignupPage = () => {
        navigate("/signup")
    }

    const goToDashboardFromLogin = () => {
        let hasError = false

        if (loginEmail.length === 0) {
            hasError = true
            setLoginEmailError("Email Address is required")
        }
        else if (loginEmail.length < 5) {
            hasError = true
            setLoginEmailError("Email address should have minimum of 5 characters")
        }
        else if (loginEmail.length > 20) {
            hasError = true
            setLoginEmailError("Email address should not exceed 20 characters")
        }  

        if (loginPassword.length === 0) {
            hasError = true
            setLoginPasswordError("Password is required")
        }
        else if (loginPassword.length < 5) {
            hasError = true
            setLoginPasswordError("Password should have minimum of 5 characters")
        }
        else if (loginPassword.length > 20) {
            hasError = true
            setLoginPasswordError("Password should not exceed 20 characters")
        }

        if (loginUsername.length === 0) {
            hasError = true
            setLoginUsernameError("Username is required")
        }
        else if (loginUsername.length < 5) { 
            hasError = true
            setLoginUsernameError("Username should have minimum of 5 characters")
        }
        else if (loginUsername.length > 20) {
            hasError = true
            setLoginUsernameError("Username should not exceed 20 characters")
        }
       

        if (hasError === false)
            navigate("/")
    }

    const loginEmailFunction = (e) => {
        setLoginEmail(e.target.value)
    }

    const loginPasswordFunction = (e) => {
        setLoginPassword(e.target.value)
    }

    const loginUsernameFunction = (e) => {
        setLoginUsername(e.target.value)
    }
    return(
        <div className="pageColor">
            <div className="loginColor">
                <h1 className="loginTitle">Login</h1>
                <div className="field2">
                <div>
                <i className="fa-regular fa-envelope icon1"></i>
                <input className="text1" type="text" onChange={loginEmailFunction} placeholder="Enter your email" />
                </div>
                <span className="errorMessages">{loginEmailError}</span>
                </div>
                <div className="field2">
                <div>
                <i className="fa-solid fa-lock icon1"></i>
                <input className="text1" type="password" onChange={loginPasswordFunction} placeholder="Confirm a password" /> 
                </div>
                <span className="errorMessages">{loginPasswordError}</span>
                </div>
                <div className="field2">
                <div>
                <i className="fa-regular fa-user icon1"></i>
                <input className="text1" type="text" onChange={loginUsernameFunction} placeholder="Enter username" />
                </div>
                <span className="errorMessages">{loginUsernameError}</span>
                </div>
                <div className="text2">
                <div>
                <input className="rememberCheckbox" type="checkbox" />  
                <label className="remember">Remember me</label>
                </div>
                <div>
                <a className="forgotPasswordLabel" href="">Forgot password?</a>
                </div>
                </div>
                <button className="loginButton" onClick={goToDashboardFromLogin}>Login Now</button>
                <div className="bottom">
                <p>Don't have an account?</p>
                <p className="signupLink" onClick={goToSignupPage}>Signup now</p>
                </div>

            </div>
        </div>
    )
}

export default Login;