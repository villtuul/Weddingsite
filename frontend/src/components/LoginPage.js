import * as translation from "../translations/translation.json";
import LanguageSelector from "./LanguageSelector";
import React from "react";
import CustomInputField from "./CustomInputField";

const LoginPage = ({locale, setLocale}) => {
    const [user, setUser] = React.useState(null);
    const [pass, setPass] = React.useState(null);
    const [isAdminLogin, setIsAdminLogin] = React.useState(false);

    const toggleAdminLogin = () =>{
        setIsAdminLogin(admLogin  => !admLogin)
    }

    const doSubmit = () => {
        if (!isAdminLogin){
            setUser("foo");
        }

        var loginUrl = '/perform_login?username='+user+'&password='+pass;
        fetch(loginUrl, {
            method: "POST"
        })
        .then(v => {if(v.redirected) window.location = v.url})
        .catch(e => {console.warn(e)})
    }

    let form;
    if (isAdminLogin) {
        form = <>
                    <CustomInputField type="Code" onChange={val => setUser(val)} label={translation[locale].user}/>
                    <CustomInputField type="Code" onChange={val => setPass(val)} label={translation[locale].code}/>
                </>;
    } else {
        form = <CustomInputField type="Code" onChange={val => setPass(val)} label={translation[locale].code}/>;
    }

    return (
        <>
            <h1>{translation[locale].title}</h1>
            {form}
            <button className="btn submit" onClick={doSubmit} tabIndex="1">
                {translation[locale].login}
            </button>
            <button className="btn" onClick={toggleAdminLogin} tabIndex="1">
                {translation[locale].admin}
            </button>
            <LanguageSelector changeLanguage={lan => setLocale(lan)} />
        </>
    );
}

export default LoginPage;