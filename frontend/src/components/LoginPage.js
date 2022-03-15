import * as translation from "../translations/translation.json";
import React, {useEffect} from "react";
import CustomInputField from "./CustomInputField";
import {highlightField} from "../Utils";

const LoginPage = ({locale,navigate}) => {
    const [user, setUser] = React.useState("user");
    const [pass, setPass] = React.useState(null);
    const [isAdminLogin, setIsAdminLogin] = React.useState(false);

    const toggleAdminLogin = () =>{
        setIsAdminLogin(admLogin  => !admLogin)
    }

    const doSubmit = () => {
        // Because react state is async we use this way to hardcode username when user logs in.
        let username = user;
        if (!isAdminLogin){
            username = "user";
        }

        if (pass == null || user == null){
            highlightField("[id=Code]");
            return;
        }

        let loginUrl = '/perform_login?username=' + username + '&password=' + pass;
        fetch(loginUrl, {method: "POST"})
        .then(v => {navigate(v.url.substring(v.url.lastIndexOf('/')+1))})
        .catch(e => {console.warn(e); })
    }

    let form;
    if (isAdminLogin) {
        form =
            <>
                <CustomInputField type="Code" id="Code" onChange={val => setUser(val)} label={translation[locale].user}/>
                <CustomInputField type="Password" id="Code"  onChange={val => setPass(val)} label={translation[locale].code}/>
            </>;
    } else {
        form = <CustomInputField type="Code" id="Code" onChange={val => setPass(val)} label={translation[locale].code}/>;
    }

    return (
        <div className="contentbox logout">
            <h1>{translation[locale].title}</h1>
            {form}
            <button className="btn"
                    onClick={doSubmit} tabIndex="2">
                {translation[locale].login}
            </button>
            <button className="btn" onClick={toggleAdminLogin} tabIndex="3">
                {translation[locale].admin}
            </button>
        </div>
    );
}

export default LoginPage;