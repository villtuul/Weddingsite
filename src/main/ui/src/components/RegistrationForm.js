import * as translation from "../translations/translation.json";
import React from "react";
import CustomInputField from "./CustomInputField";
import './RadioButton.scss'


const RadioCheckBox = ({locale}) => {

    const handleKeyDown = event => {
        if (event.key === "Enter" || event.keyCode === 32 /*Space*/) {
            document.querySelector("input[id='" + event.target.className + "']").checked = true;
            event.preventDefault();
        }
    }

    return <div className="middle">
        <h3>{translation[locale].participate}</h3>
        <label>
            <input type="radio" name="radio" id="yes box" />
            <div className="yes box" tabIndex="3" onKeyDown={handleKeyDown}>
                <span>{translation[locale].yes}</span>
            </div>
        </label>

        <label>
            <input type="radio" name="radio" id="no box" />
            <div className="no box" tabIndex="4" onKeyDown={handleKeyDown}>
                <span>{translation[locale].no}</span>
            </div>
        </label>
    </div>
}

const RegistrationForm = ({locale}) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [submitted, setSubmitted] = React.useState("");

    const handleSubmit = e => {
        var json ={
            "firstName": firstName,
            "lastName": lastName,
            "message": message,
            "isParticipating": document.querySelector("input[id='yes box']").checked
        }
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        };

        fetch('/api/user', requestOptions)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    setSubmitted(true)
                }
            })
    }
    console.log(submitted);
    return submitted ? (
        <button className="btn submit" onClick={setSubmitted(false)} tabIndex="10">Submit again</button>
        ) :
        (
        <>
            <CustomInputField type="form" value={firstName}
                              onChange={val => setFirstName(val)}
                              label={translation[locale].firstname}
                              tabIndex="1"/>

            <CustomInputField type="form" value={lastName}
                              onChange={val => setLastName(val)}
                              label={translation[locale].lastname}
                              tabIndex="2"/>
            <RadioCheckBox locale={locale}/>

            <CustomInputField type="textarea" value={message}
                              onChange={val => setMessage(val)}
                              label={translation[locale].message}
                              tabIndex="5"/>

            <button className="btn submit" onClick={handleSubmit} tabIndex="10">{translation[locale].submit}</button>
        </>
    );
}
export default RegistrationForm;