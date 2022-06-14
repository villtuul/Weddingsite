import * as translation from "../translations/translation.json";
import React, {useEffect} from "react";
import CustomInputField from "./CustomInputField";
import {highlightField} from "../Utils";

const LoginPage = ({locale,navigate}) => {
    const [input, setInput] = React.useState(null);

    const doSubmit = (input) => {
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
            navigate(v.url.substring(v.url.lastIndexOf('/')+1))

            if (v.url.indexOf('/login') >= 0) {
                highlightField("[id=Code]");
            }

            })
        .catch(e => {
            console.warn(e);
        })

    }

    const handleClick = () => {
        doSubmit(input);
    }

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                doSubmit(document.getElementById('Code').value);
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <div className="contentbox logout">
            <h1>{translation[locale].title}</h1>
            <CustomInputField type="Code"
                              id="Code"
                              value={input}
                              onChange={val => setInput(val)}
                              label={translation[locale].code}/>
            <button className="btn"
                    onClick={handleClick}>
                {translation[locale].login}
            </button>
        </div>
    );
}

export default LoginPage;