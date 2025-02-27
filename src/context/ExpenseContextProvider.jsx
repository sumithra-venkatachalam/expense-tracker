import {useState} from "react"
import CreateContextExpense from "./ExpenseContext.js";

const ExpenseContextProvider = ({children}) => {
    const [addIncomeModalOpen, setAddIncomeModalOpen] = useState(false);
    const [incomeList, setIncomeList] = useState([]);
    const [editIncomeId, setEditIncomeId] = useState(null);
    const [expenseList, setExpenseList] = useState([]); 
    const [addExpenseModalOpen, setAddExpenseModalOpen] = useState(false);
    const [editExpenseId, setEditExpenseId] = useState(null);
    const [loginUsername, setLoginUsername] = useState(""); 
    const [loginEmail, setLoginEmail] = useState("");
    const [signupUsername, setSignupUsername] = useState();
    const sumOfExpense = expenseList.reduce((initialIncome, eachExpense)=> { return initialIncome + Number(eachExpense.amount)} , 0)
    console.log("sumincome",sumOfExpense);
    const sumOfIncome = incomeList.reduce((initialIncome, eachIncome)=>  initialIncome + Number(eachIncome.amount) , 0)
    console.log("sumincome",sumOfIncome);
    const balanceAmount = sumOfIncome - sumOfExpense;

    return(
        <CreateContextExpense.Provider value={{
            addIncomeModalOpen, 
            setAddIncomeModalOpen,
            incomeList,
            setIncomeList,
            editIncomeId,
            setEditIncomeId, 
            expenseList,
            setExpenseList,
            addExpenseModalOpen,
            setAddExpenseModalOpen,
            editExpenseId,
            setEditExpenseId,
            loginUsername,
            setLoginUsername,
            signupUsername,
            setSignupUsername,
            sumOfExpense,
            sumOfIncome,
            balanceAmount,
            loginEmail,
            setLoginEmail,

        }}>
            {children}
        </CreateContextExpense.Provider> 
    )

}

export default ExpenseContextProvider;