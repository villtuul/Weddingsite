import * as translation from "../translations/en.json";
import React from "react";
import CustomInputField from "./CustomInputField";
import './RadioButton.scss'

const RadioCheckBox = ({locale,handleChange}) => {

    const handleKeyDown = event => {
        if (event.key === "Space"){
            console.log("TEst")

        }
        console.log(event)
    }

    return <div className="middle">
        <h3>{translation[locale].participate}</h3>
        <label>
            <input type="radio" name="radio"  onChange={handleChange} />
            <div className="yes box" tabIndex="3" onKeyDown={handleKeyDown} >
                <span>{translation[locale].yes}</span>
            </div>
        </label>

        <label>
            <input type="radio" name="radio" onChange={handleChange}/>
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
    const [isParticipating, setParticipation] = React.useState(true);

    const handleChange = () => {
        setParticipation(!isParticipating);
    };

    return (
            <>
                <CustomInputField type="form" value={firstName}
                       onChange={val => setFirstName(val)}
                       label={translation[locale].firstname}
                tabIndex="1"/>

                <CustomInputField type="form"  value={lastName}
                       onChange={val => setLastName(val)}
                       label={translation[locale].lastname}
                                  tabIndex="2"/>
                <RadioCheckBox locale={locale}
                        handleChange={handleChange}/>

                <CustomInputField type="textarea"  value={message}
                       onChange={val => setMessage(val)}
                       label={translation[locale].message}
                tabIndex="5"/>

                <button className="yes box">{translation[locale].submit}</button>
            </>
            );
}
export default RegistrationForm;