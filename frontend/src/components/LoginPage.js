import * as translation from "../translations/translation.json";
import React, {useEffect} from "react";
import CustomInputField from "./CustomInputField";
import {highlightField} from "../Utils";

const LoginPage = ({locale,navigate}) => {
    const [input, setInput] = React.useState(null);

    const doSubmit = () => {
        // Sanity check, highlight if pass not given.
        if (input == null ){
            highlightField("[id=Code]");
            return;
        }

        // Get user and pass
        const credentials = input.split("|");
        var user;
        var pass;

        if (credentials.length === 1){
            user = "user";
            pass = credentials[0];
        } else if (credentials.length === 2) {
            user = credentials[0];
            pass = credentials[1];
        }

        let loginUrl = '/perform_login?username=' + user + '&password=' + pass;
        fetch(loginUrl, {method: "POST"})
        .then(v => {
            console.log(v)
//            if(v.status === 200){
                console.log('Login succesful. Redirecting to ' + v.url)
                if (user === "user") {navigate("/content")} else {navigate("/admin")}
  //          } else {
                highlightField("[id=Code]");
    //        }
            })
        .catch(e => {
            console.warn(e);
        })

    }

    let form = <CustomInputField type="Code" id="Code" onChange={val => setInput(val)} label={translation[locale].code}/>;

    return (
        <div className="contentbox logout">
            <h1>{translation[locale].title}</h1>
            {form}
            <button className="btn"
                    onClick={doSubmit}>
                {translation[locale].login}
            </button>
        </div>
    );
}

export default LoginPage;