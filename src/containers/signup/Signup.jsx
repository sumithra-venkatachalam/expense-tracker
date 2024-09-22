import "./Signup.css";
import {useNavigate} from "react-router-dom";
import {useState, useContext} from "react";
import ExpenseContext from "../../context/ExpenseContext.js";
function Signup() {

    const {setSignupUsername} = useContext(ExpenseContext);

    const [signupEmail, setSignupEmail] = useState();
    const [signupPassword, setSignupPassword] = useState();
    const [signupConfirmPassword, setSignupConfirmPassword] = useState();
    
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login")
    }

    const goToDashboardFromSignup = () => {
        navigate("/")
    }

    const signupUsernameFunction = (e) => {
        setSignupUsername(e.taget.value)
    }

    const signupEmailFunction = (e) => {
        setSignupEmail(e.target.value)
    }

    const signupPasswordFunction = (e) => {
        setSignupPassword(e.target.value)
    }

    const signupConfirmPasswordFunction = (e) => {
        setSignupConfirmPassword(e.target.value)
    }

    return(
        <div className="signupPageColor">
            <div className="all">
                <h1>Registeration</h1>
                <div>
                <i className="fa-regular fa-user signupIcons"></i>
                <input className="signupFields" type="text" onChange={signupUsernameFunction} placeholder="Enter your name" />
                </div>
                <div>
                <i className="fa-regular fa-envelope signupIcons "></i>
                <input className="signupFields" type="email" onChange={signupEmailFunction} placeholder="Enter your email" />
                </div>
                <div>
                <i className="fa-solid fa-lock signupIcons"></i>
                <input className="signupFields" type="password" onChange={signupPasswordFunction} placeholder="Create a password" />
                </div>
                <div>
                <i className="fa-solid fa-lock signupIcons"></i>
                <input className="signupFields" type="password" onChange={signupConfirmPasswordFunction} placeholder="Confirm a password" />
                </div>
                <div className="termsLabel">
                <input className="termsCheckbox" type="checkbox" />
                <label className="termsText">I accept all terms & conditions</label>
                </div>
                <button className="registerNowButton" onClick={goToDashboardFromSignup}>Register Now</button>
                <div className="signupBottom">
                <p>Already have an account?</p>
                <p className="signupLink" onClick={goToLogin}>Login now</p>
                </div>
                
            </div>
        </div>
    )
}

export default Signup;