import React,  {useState} from "react";
import "./App.css";


function App(){

    const [formData ,setFormData] = useState({
        fName:'', 
        lName:'',
        email: ''
        });

    function updateFormData(event){
        const {name, value} = event.target;

        setFormData({...formData,[name]:value})
    // setFormData((preValue) => {
    //     if(name === "fName"){
    //         return {
    //             fName: value,
    //             lName: preValue.lName,
    //             email: preValue.email
    //         }
    //     }
    //     else if(name === "lName"){
    //         return {
    //             fName: preValue.fName,
    //             lName: value,
    //             email: preValue.email
    //         }
    //     }
    //     else if(name === "email"){
    //         return {
    //             fName: preValue.fName,
    //             lName: preValue.lName,
    //             email: value
    //         }
    //     }
    // })

    }
    
    return(
        <div className="container">
            <h1>Hello {formData.fName} {formData.lName}</h1>
            <p>{formData.email}</p>
            <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={updateFormData}
                value={formData.fName}
                name="fName"
            />
            <input
                type="text"
                placeholder="Second Name"
                onChange={updateFormData}
                value={formData.lName}
                name="lName"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={updateFormData}
                value={formData.email}
                name="email"
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;