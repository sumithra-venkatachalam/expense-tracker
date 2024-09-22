import "./Dashboard.css";
import {useContext} from "react";
import ExpenseContext from "../../context/ExpenseContext.js";

function Dashboard() {

    const {loginUsername, signupUsername, sumOfExpense, sumOfIncome, balanceAmount} = useContext(ExpenseContext);

    return( 
        <div> 
            <div className="dashboardPage">
            <h1 className="dashboardName">Hi, {loginUsername}👋 </h1>
            <p className="dashboardpara">Here's what happening with your money. Lets manage your expense!</p>
            <div className="dashboardSecondPart">
            <h3>Expense Mate AI ✨</h3>
            <p>Based on your current financial data, it's essentail to begin friendly ways to generate income, which could include finding employment or estabilishing a small business. Consider reduing unnecessary expenses to maximize your remaining budget of ₹ {balanceAmount} and think about creating an emergency fund, investing or saving with a proper plan to secure your financial future. </p>
            </div>
            </div>
            <div className="entireBox">
                <div className="firstBox">
            <div className="box1">
                <h2>Total Income</h2>
                <h1>₹{sumOfIncome}</h1> 
                </div>
            <div className="boxs1">   
                <i className="fa-solid fa-dollar-sign dashboardIcon"></i>
                </div> 
                </div>
                <div className="secondBox">
            <div className="box1">
                <h2>Total Expense</h2>
                <h1>₹{sumOfExpense}</h1>
            </div>
            <div>
                <i className="fa-solid fa-file-lines dashboardIcon"></i>
                </div>
                </div>
                
                <div className="thirdBox">
            <div className="box1">
                <h2>Balance Amount</h2>
                <h1>₹{balanceAmount}</h1>
            </div>
            <div>
                <i className="fa-solid fa-money-bill dashboardIcon"></i>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;