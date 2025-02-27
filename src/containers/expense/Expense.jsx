import "./Expense.css";
import {useContext} from "react";
import ExpenseContext from "../../context/ExpenseContext.js";
import AddExpense from "./AddExpense.jsx";

function Expense() {

    const {expenseList, setExpenseList, setAddExpenseModalOpen, setEditExpenseId} = useContext(ExpenseContext)

    const addExpenseModal = () => {
        setAddExpenseModalOpen(true)
    }

    const handleExpenseDelete = (id) => {
       const updatedExpenseList = expenseList.filter((eachExpense)=> eachExpense.id !== id) //true - will append
        setExpenseList(updatedExpenseList)
    }

    const handleExpenseEdit = (id) => {
        setAddExpenseModalOpen(true)
        setEditExpenseId(id)

    }

    const allExpense = expenseList?.map(eachExpense => {
        return(
            <div className="eachIncomeCard" key={eachExpense.id}>
                <div className="titleAmount">
                <h1 className="title">{eachExpense.title}</h1>
                <h3 className="amount">{eachExpense.amount}</h3>
                </div>
                <p>{eachExpense.category}</p>
                <p>{eachExpense.date}</p>
                <div className="expenseBothButton">
                <i className="fa-solid fa-pen-to-square editIcon" onClick={()=>handleExpenseEdit(eachExpense.id)}></i>
                <i className="fa-solid fa-trash deleteIcon" onClick={()=>handleExpenseDelete(eachExpense.id)} ></i>
                </div>
            </div>
        )
        
    })

    return(
        <div>
            
        <h1 className="incomeTitle">My Expense</h1>
        <div className="cardContainer">
        <div onClick={addExpenseModal} className="eachIncomeCard">
        <button className="iconForNewExpense">+</button>
        <h1 className="textForNewExpense">Add new expense</h1>
        </div>
        {allExpense}
        <AddExpense/>
        </div>
        <div className="fullTable"> 
        {/* <table className= "table table-hover table-bordered">
  <thead>
    <tr className="tableHeading" >
      <th scope="col">#</th>
      <th scope="col">Expenditure On</th>
      <th scope="col">Expense Amount</th>
      <th scope="col">Expense Category</th>
      <th scope="col">Expense Date</th>
    </tr>
  </thead>
  <tbody>

    {expenseList.map((eachExpense)=>(
        <tr key={eachExpense.id}>
            <td>{eachExpense.id}</td>
            <td>{eachExpense.title}</td>
            <td>{eachExpense.amount}</td>
            <td>{eachExpense.category}</td>
            <td>{eachExpense.date}</td>
        </tr>
    ))}

  </tbody>
</table> */}
</div>
        
    </div>
    )
}

export default Expense;