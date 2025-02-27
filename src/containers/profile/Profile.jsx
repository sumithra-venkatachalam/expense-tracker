import "./Profile.css";
import {useContext, useState} from "react";
import ExpenseContext from "../../context/ExpenseContext.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {

    const {loginUsername, loginEmail} = useContext(ExpenseContext)

    const [bioDescription, setbioDescription] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [currentLocation, setCurrentlocation] = useState("");
    
    const bioDescriptionFunc = (e) => {
        setbioDescription(e.target.value)
    }

    const phoneNumberFunc = (e) => {
        setPhoneNumber(e.target.value)
    }

    const locationFunc = (e) => {
        setCurrentlocation(e.target.value)
    }

    const showToast = () => {
        toast("Your changes has been saved successfully!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
        });
    };

    return( 
        <div>
            <div className="profilenametop">
              <div> 
                 <img className="profileImage" src="https://media.istockphoto.com/id/1401557224/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_r6SmNYFG-x-2OFIjQA8hGu7e7QHBL0m6bR8RgsmMYY=" alt="" />
             </div>
            <div className="usernameAndEmail">
                <h1 className="profileUsername">{loginUsername}</h1>
                <h3>{loginEmail}</h3>
            </div>
            </div>
            <div>
                <h3 className="basicDetailsTitle">Basic Details:</h3>
                <div className="bothBasicDeatils">
                <p className="loggedinEmailAddress">Your logged in Email Address : {loginEmail}</p>
                <p className="loggedinUsername">Your logged in Username : {loginUsername}</p>
                </div>
            </div>
            <div className="overAllAdditionalInfo">
                <h3 className="additionalDetailTitle">Provide Addtional Details : </h3>
                <div className="additionalDetailsFields">
                    <div>
                        <label className="inputFieldLabel" htmlFor="bio">Bio Description : </label>
                        <input className="description" value={bioDescription} onChange={bioDescriptionFunc} type="textarea" id="bio" rows="4" cols="50" placeholder="Enter your bio description" />
                
                     </div>
                     <div>
                        <label className="inputFieldLabel" htmlFor="phoneNumber">Phone Number : </label>
                         <input className="description" value={phoneNumber} onChange={phoneNumberFunc} type="number" id="phoneNumber" placeholder="Enter your bio description" />
                     </div>
                     <div>
                        <label className="inputFieldLabel" htmlFor="location">Current Location : </label>
                         <input className="description" value={currentLocation} onChange={locationFunc} type="text" id="location" placeholder="Enter your location" />
                     </div>
                     </div>
                     <div className="profileButton">
                     <button className="profileCancelButton">Cancel</button>
                     <button className="profileSaveButton" onClick={showToast} >Save Changes</button>
                     <ToastContainer />
                     </div>
            </div>
        </div>
    )
}
 
export default Profile;
