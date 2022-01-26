import * as translation from "../translations/translation.json";
import LanguageSelector from "./LanguageSelector";
import CustomInputField from "./CustomInputField";
import React from "react";


const LoginPage = ({value, locale, setValue, setIsLogin, setLocale}) => {
    return (
        <>
            <h1>{translation[locale].title}</h1>
            <CustomInputField type="Code" label={translation[locale].code}
                   value={value}
                   onChange={val => setValue(val)}
                   setIsLogin={val => setIsLogin(val)}/>
            <LanguageSelector changeLanguage={lan => setLocale(lan)} />
        </>
    );
}

export default LoginPage;