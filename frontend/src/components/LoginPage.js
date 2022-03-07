import * as translation from "../translations/translation.json";
import LanguageSelector from "./LanguageSelector";
import CustomInputField from "./CustomInputField";
import React, {useEffect} from "react";

let timer = null;

const LoginPage = ({locale, setLocale, setIsLogin}) => {
    const [validationResult, setValidationResult] = React.useState(null);
    const [value, setValue] = React.useState(null);

    // Add small delay on login validation. Do not validate while user is still writing
    useEffect(() => {
        const timeOutId = setTimeout(() => validateValue(value), 1000);
        return () => clearTimeout(timeOutId);
    }, [value]);

    const validateValue = val => {
        // TODO: add serverside validation
        if (val === null || val === ""){
            setValidationResult(null);
        } else if (val === "240922") {
            setValidationResult(true);
            timer = setTimeout(() => {
                setIsLogin(true);
            }, 2000);
        } else {
            setValidationResult(false);
        }
    };

    const handleKeyDown = event => {
        clearTimeout(timer)
        if (event.key === 'Enter' || event.key === 'Tab') {
            validateValue(event.target.value)
        }
    }
    return (
        <>
            <h1>{translation[locale].title}</h1>
            <CustomInputField type="Code"
                              onChange={val => setValue(val)}
                              label={translation[locale].code}
                              onKeyDown={handleKeyDown}
                              validationResult={validationResult}/>
            <LanguageSelector changeLanguage={lan => setLocale(lan)} />
        </>
    );
}

export default LoginPage;