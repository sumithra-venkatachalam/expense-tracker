import {Outlet, useNavigate} from "react-router-dom";
import "./Layout.css";

function Layout() {

    const navigate = useNavigate();

   const goToIncome = () => {
    navigate("income")
   }

   const goToExpense = () => {
    navigate("expense")
   } 

   const goToProfile = () => {
    navigate("profile")
   }

   const goToDashboardPage = () => {
    navigate("")
   }

   const loggingOut = () => {
    navigate("/login") 
   }
   
    return(
        <div className="entire">
        <div className ="leftEnd">
            <div className="icons hello">
           <i className="fa-brands fa-slack iconss"></i>
            <h1 className="text12">ExpenseMate</h1>
            </div>
            <div className="icons">
            <i className="fa-solid fa-dice-four icon"></i>
            <h1 className="text11" onClick={goToDashboardPage} >Dashboard</h1>
            </div>
            <div className="icons">
            <i className="fa-solid fa-dollar-sign icon"></i>
            <h1 className="text11" onClick={goToIncome}>Income</h1>
            </div>
            <div className="icons">
            <i className="fa-solid fa-file-lines icon"></i>
            <h1 className="text11" onClick={goToExpense}>Expense</h1>
            </div>
            <div className="icons">
            <i className="fa-solid fa-user icon"></i>
            <h1 className="text11" onClick={goToProfile}>Profile</h1>
            </div>
        </div>
        <div>
        <div className="end1">
        <i className="fa-solid fa-user icon"></i>
        <h1 className="text11">Profile</h1>
        <i onClick={loggingOut} className="fa fa-sign-out logoutButton" aria-hidden="true"></i>
        </div>
        <div className="hhh">
            <Outlet/>
        </div>  
        </div>
        </div>
    )
}

export default Layout;