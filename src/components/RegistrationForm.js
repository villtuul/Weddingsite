import * as translation from "../translations/en.json";
import React from "react";
import CustomInputField from "./CustomInputField";

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
                    <div>
                        <h3>{translation[locale].participate}</h3>
                        <input type="radio" checked={isParticipating} onChange={handleChange} /> {translation[locale].yes}
                        <input type="radio" checked={!isParticipating} onChange={handleChange}/> {translation[locale].no}
                    </div>

                <CustomInputField type="textarea"  value={message}
                       onChange={val => setMessage(val)}
                       label={translation[locale].message}/>

                <button>{translation[locale].submit}</button>
            </>
            );
}
export default RegistrationForm;