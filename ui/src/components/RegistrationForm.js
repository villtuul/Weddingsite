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

    const handleSubmit = e => {
        var json ={
            "firstname": firstName,
            "lastname": lastName,
            "message": message,
            "isparticipating": document.querySelector("input[id='yes box']").checked
        }
        console.log(json);
        // TODO ajax call to server
    }

    return (
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