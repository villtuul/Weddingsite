import * as translation from "../translations/en.json";
import React from "react";
import CustomInputField from "./CustomInputField";

const RegistrationForm = ({locale}) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [participation, setParticipate] = React.useState(true);
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
                        <input type="radio" value="Male" name="gender" /> {translation[locale].yes}
                        <input type="radio" value="Female" name="gender" /> {translation[locale].no}
                    </div>

                <CustomInputField type="textarea"  value={message}
                       onChange={val => setMessage(val)}
                       label={translation[locale].message}/>
                <button>{translation[locale].submit}</button>

            </>
            );
}
export default RegistrationForm;