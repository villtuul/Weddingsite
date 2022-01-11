import StyledBox from "./components/StyledBox";
import ContentPage from "./components/ContentPage";
import LoginPage from "./components/LoginPage";
import './App.css';
import React from "react";

function App() {
    const [value, setValue] = React.useState("");
    const [isLogin, setIsLogin] = React.useState(false);
    const [locale, setLocale] = React.useState("fi");


    if (isLogin) {
        return (
            <div className="mainDiv">
            <StyledBox isLogin={true}>
                    <ContentPage locale={locale}
                                 setValue={val => setValue(val)}
                                 setIsLogin={val => setIsLogin(val)}
                                 setLocale={loc => setLocale(loc)}/>
                </StyledBox>
            </div>
        );
    } else {
        return (
            <div className="mainDiv">

            <StyledBox isLogin={false}>
                <LoginPage locale={locale}
                           value={value}
                           setValue={val => setValue(val)}
                           setIsLogin={val => setIsLogin(val)}
                           setLocale={loc => setLocale(loc)}/>
            </StyledBox>
            </div>
        );
    }
};

export default App;
