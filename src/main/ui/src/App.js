import ContentPage from "./components/ContentPage";
import LoginPage from "./components/LoginPage";
import './App.scss';
import React, {useRef} from "react";

function App() {
    const [isLogin, setIsLogin] = React.useState(false);
    const [locale, setLocale] = React.useState("fi");


    if (isLogin) {
        return (
            <div className="overlay">
                    <div className="contentbox loggedin">
                        <ContentPage locale={locale}
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
                                   setLocale={loc => setLocale(loc)}
                                   setIsLogin={val => setIsLogin(val)}
                        />
                    </div>
                </div>
        );
    }
};

export default App;
