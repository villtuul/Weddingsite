import * as translation from "../translations/en.json";
import React from "react";
import CustomInputField from "./CustomInputField";
import './RadioButton.scss'

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
                       label={translation[locale].firstname}/>

                <CustomInputField type="form"  value={lastName}
                       onChange={val => setLastName(val)}
                       label={translation[locale].lastname}/>
                        <div className="middle">
                            <h3>{translation[locale].participate}</h3>
                            <label>
                                <input type="radio" name="radio" checked={isParticipating} onChange={handleChange}/>
                                <div className="yes box">
                                    <span>{translation[locale].yes}</span>
                                </div>
                            </label>

                            <label>
                                <input type="radio" name="radio" checked={!isParticipating} onChange={handleChange}/>
                                <div className="no box">
                                    <span>{translation[locale].no}</span>
                                </div>
                            </label>
                        </div>

                <CustomInputField type="textarea"  value={message}
                       onChange={val => setMessage(val)}
                       label={translation[locale].message}/>

                <button className="yes box">{translation[locale].submit}</button>
            </>
            );
}
export default RegistrationForm;