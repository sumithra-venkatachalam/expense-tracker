import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState, useContext, useEffect} from "react";
import ExpenseContext from "../../context/ExpenseContext.js";


function AddExpense() {

    const [expenditureOn, setExpenditureOn] = useState();
    const [expenseAmount, setExpenseAmount] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState()

    const {addExpenseModalOpen, setAddExpenseModalOpen, expenseList, setExpenseList, editExpenseId, setEditExpenseId} = useContext(ExpenseContext);

    const handleClose = () => {
        setAddExpenseModalOpen(false)
        setEditExpenseId(null);
        setExpenditureOn(null);
        setExpenseAmount(null);
        setCategory(null);
        setDate(null);
    }

    useEffect(()=>{
        if (editExpenseId !== null) {
            const currentEditExpense = expenseList.find((eachExpense)=>eachExpense.id === editExpenseId)
            setExpenditureOn(currentEditExpense.title);
            setExpenseAmount(currentEditExpense.amount);
            setCategory(currentEditExpense.category);
            setDate(currentEditExpense.date);
        }
    }, [editExpenseId])

    const handleSave = () => {
        const expenseObj = {
            title: expenditureOn,
            amount: expenseAmount,
            date: date,
            category: category,
            id: editExpenseId === null ? expenseList.length + 1 : editExpenseId,
        }

        if (editExpenseId === null) {
            setExpenseList((prevExpense)=>[...prevExpense, expenseObj]);
        } else {
            const updatedExpense = expenseList.map(eachExpense => {
                if (eachExpense.id === editExpenseId)
                    return expenseObj
                return eachExpense
                })
                setExpenseList(updatedExpense)

        }

        

        setAddExpenseModalOpen(false)

        setEditExpenseId(null);
        setExpenditureOn(null);
        setExpenseAmount(null);
        setCategory(null);
        setDate(null);
    }

    const handleExpenditureOn = (e) => {
        setExpenditureOn(e.target.value)
    }

    const handleExpenseAmount = (e) => {
        setExpenseAmount(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    return(
        <div>
             <Modal show={addExpenseModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="allFields">
            <div className="eachField">
              <label className="labelForEachField">Expenditure on</label>
              <input className="inputForEachField" type="text" value={expenditureOn} onChange={handleExpenditureOn} />
            </div>
            <div className="eachField">
              <label className="labelForEachField">Expense Amount</label>
              <input className="inputForEachField" type="number" value={expenseAmount} onChange={handleExpenseAmount} />
            </div>
            <div className="eachField"> 
              <label className="labelForEachField">Category</label>
              <input className="inputForEachField" type="text" value={category} onChange={handleCategory} />
            </div>
            <div className="eachField">
              <label className="labelForEachField">Expense date</label>
              <input className="inputForEachField" type="date" value={date} onChange={handleDate} />
            </div>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Expense
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
} 

export default AddExpense;