import React from "react";
import "./ContactMe.css"
import { useState } from "react";
import { ImWhatsapp } from "react-icons/im";


function ContactMeSection () {
    const [message, setMessage] = useState({Name:"",Message:""})
    const [fillFields, setfillFields] = useState(false)

    const onSubmit = (e) =>{
        if(message.Message === "" || message.Name === ""){
            e.preventDefault()
            setfillFields(true)
        } else {
            e.preventDefault()
            const myNumber= "+59177926661"
                    const url = "http://api.whatsapp.com/send/?phone=" + myNumber + "&text="
                    + "Hello! my name is " + message.Name + "%0a"
                    + message.Message + "%0a";
                    
                    window.open(url, "_blank").focus();
            setfillFields(false)
        } 
    }

    return(
        <section className="contactMeSection" id="contactMe">
            <form onSubmit={onSubmit} >
                <h1 className="tituloForm">Lets get in touch!</h1>
                <div className="inputContainer">
                    <input id="name" type="text" className="formInput" placeholder=" " onChange={(e)=>setMessage({Name:e.target.value, Message:message.Message})}></input>
                    <label for="name"  className="formLabel">Name:</label>
                </div>
                <div className="inputContainer">
                    <textarea id="message" className="formInput ta" placeholder=" " onChange={(e)=>setMessage({Name:message.Name, Message:e.target.value})}></textarea>
                    <label for="message" className="formLabel">Message:</label>
                </div>

                {fillFields === true && (
                    <p className="emptyFields">Please fill out all the fields!</p>
                )}
                <button className="submit">
                    Send
                    <ImWhatsapp />
                </button>
            </form>
            <p className="updatedText">Last updated 15/01/2025</p>
        </section>
    )
}

export default ContactMeSection