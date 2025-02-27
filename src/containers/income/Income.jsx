import "./Income.css";
import AddIncome from "./AddIncome.jsx";
import {useContext} from "react";
import ExpenseContext from "../../context/ExpenseContext.js"; 

function Income() {
    const {setAddIncomeModalOpen, incomeList, setIncomeList, setEditIncomeId} = useContext(ExpenseContext);

    const addIncomeModal = () => {
        setAddIncomeModalOpen(true)
    }

    const removeIncome = (id) => {
        const balanceIncome = incomeList?.filter(eachIncome => eachIncome?.id !== id)
        setIncomeList(balanceIncome)
    }

    const editIncome = (id) => {
        setAddIncomeModalOpen(true);
        setEditIncomeId(id)
    }

    const allIncome = incomeList?.map(eachIncome => {
        return(
            <div className="eachIncomeCard" key={eachIncome.id}>
                <div className="titleAmount">
                <h1 className="title">{eachIncome.title}</h1>
                <h3 className="amount">{eachIncome.amount}</h3>
                </div>
                <p>{eachIncome.category}</p>
                <p>{eachIncome.date}</p>
                <div className="bothIcons">
                <i className="fa-solid fa-pen-to-square editIcon" onClick={()=>editIncome(eachIncome.id)}></i>
                <i className="fa-solid fa-trash deleteIcon" onClick={()=>removeIncome(eachIncome.id)}></i>
                </div>
            </div>
        )
         
    }) 
    return(
        <div className="allIncomePage">
            
            <h1 className="incomeTitle">My Income</h1>
            <div className="cardContainer">
            <div onClick={addIncomeModal} className="eachIncomeCard">
        <button className="iconForNewExpense">+</button>
        <h1 className="textForNewExpense">Add new income</h1>
        </div>
            {allIncome}
            </div>
            <AddIncome/>
{/* 
<table className= "table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Financial Source</th>
      <th scope="col">Income Amount</th>
      <th scope="col">Category</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>

    {incomeList.map((eachIncome)=>(
        <tr key={eachIncome.id}>
            <td>{eachIncome.id}</td>
            <td>{eachIncome.title}</td>
           <td>{eachIncome.amount}</td>
           <td>{eachIncome.category}</td>
            <td>{eachIncome.date}</td>
        </tr>
    ))}

  </tbody>
</table> */}
        </div>
    )
}

export default Income;