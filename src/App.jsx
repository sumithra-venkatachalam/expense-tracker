import './App.css'
import Login from "./containers/login/Login.jsx";
import Signup from "./containers/signup/Signup.jsx";
import {HashRouter, Routes, Route} from "react-router-dom";
import  Dashboard from "./containers/dashboard/Dashboard.jsx";
import  Expense from "./containers/expense/Expense.jsx";
import  Income from "./containers/income/Income.jsx";
import  Profile from "./containers/profile/Profile.jsx";
import  Layout from "./containers/layout/Layout.jsx";
import ExpenseContextProvider from "./context/ExpenseContextProvider.jsx";

function App() {
 
  return (
    <ExpenseContextProvider> 
    <HashRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/> 

    <Route path="/" element={<Layout/>}>
       <Route path="" element={<Dashboard/>}/>
       <Route path="expense" element={<Expense/>}/>
       <Route path="income" element={<Income/>}/>
       <Route path="profile" element={<Profile/>}/>
    </Route>
    </Routes>
    </HashRouter>
    </ExpenseContextProvider>
  )
}

export default App
