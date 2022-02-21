import ContentPage from "./components/ContentPage";
import LoginPage from "./components/LoginPage";
import './App.scss';
import React, {useRef} from "react";

function App() {
    const [value, setValue] = React.useState("");
    const [isLogin, setIsLogin] = React.useState(false);
    const [locale, setLocale] = React.useState("fi");


    if (isLogin) {
        return (
            <div className="overlay">
                    <div className="contentbox loggedin">
                        <ContentPage locale={locale}
                                     setValue={val => setValue(val)}
                                     setIsLogin={val => setIsLogin(val)}
                                     setLocale={loc => setLocale(loc)}/>
                    </div>
            </div>
                );
    } else {
        return (
            <div className="overlay">
                    <div className="contentbox logout">
                        <LoginPage locale={locale}
                                   value={value}
                                   setValue={val => setValue(val)}
                                   setIsLogin={val => setIsLogin(val)}
                                   setLocale={loc => setLocale(loc)}/>
                    </div>
                </div>
        );
    }
};

export default App;
