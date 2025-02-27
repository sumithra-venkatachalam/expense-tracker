import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useContext, useState, useEffect} from "react";
import ExpenseContext from "../../context/ExpenseContext.js";

function AddIncome() {
  const [financialSource, setFinancialSource] = useState();
  const [incomeAmount, setIncomeAmount] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState();

    const {addIncomeModalOpen, setAddIncomeModalOpen, setIncomeList, incomeList, editIncomeId, setEditIncomeId} = useContext(ExpenseContext);
    console.log("income", incomeList)

    useEffect(() => { 
        if (editIncomeId !== null) {
          const currentIncome = incomeList?.find(editEachIncome => editEachIncome?.id === editIncomeId)
          setFinancialSource(currentIncome?.title);
          setIncomeAmount(currentIncome?.amount);
          setCategory(currentIncome?.category);
          setDate(currentIncome?.date);
        }
    }, [editIncomeId])

    const handleClose = () => { 
      setAddIncomeModalOpen(false);
      setEditIncomeId(null);
      setFinancialSource(null);
      setIncomeAmount(null);
      setCategory(null);
      setDate(null);
    }

    const handleSave = () => { 
      const incomeObj = {
        title: financialSource,
        amount: incomeAmount,
        date: date,
        category: category,
        id: editIncomeId === null ? incomeList.length + 1 : editIncomeId,
      }

      if (editIncomeId !== null) {
           const updatedIncome = incomeList.map(eachIncome => {
            if (eachIncome.id === editIncomeId)
                return incomeObj
            return eachIncome
            })
            setIncomeList(updatedIncome)
      } else setIncomeList((previousIncome)=> [...previousIncome,incomeObj])
      

      setAddIncomeModalOpen(false)
      setEditIncomeId(null)
      setFinancialSource(null)
      setIncomeAmount(null)
      setCategory(null)
      setDate(null)

    }

    const handleFinancialSource = (e) => {
            setFinancialSource(e.target.value)
    }

    const handleIncomeAmount = (e) => {
      setIncomeAmount(e.target.value)
   }

   const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }
  
    return(
        <div>
             <Modal show={addIncomeModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Income</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="allFields">
            <div className="eachField">
              <label className="labelForEachField">Financial source</label>
              <input className="inputForEachField" value={financialSource} type="text" onChange={handleFinancialSource}/>
            </div>
            <div className="eachField">
              <label className="labelForEachField">Income Amount</label>
              <input className="inputForEachField" value={incomeAmount} type="number" onChange={handleIncomeAmount}/>
            </div>
            <div className="eachField">
              <label className="labelForEachField">Category</label>
              <input className="inputForEachField" value={category} type="text" onChange={handleCategory} />
            </div>
            <div className="eachField">
              <label className="labelForEachField">Earnings date</label>
              <input className="inputForEachField" value={date} type="date" onChange={handleDate} />
            </div>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Income
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddIncome;