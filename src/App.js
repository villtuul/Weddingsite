import StyledBox from "./components/StyledBox";
import ContentPage from "./components/ContentPage";
import LoginPage from "./components/LoginPage";
import './App.scss';
import React from "react";

function App() {
    const [value, setValue] = React.useState("");
    const [isLogin, setIsLogin] = React.useState(false);
    const [locale, setLocale] = React.useState("fi");


    if (isLogin) {
        return (
            <>
                <div className="bg-image">photo by</div>
                <StyledBox isLogin={true}>
                    <ContentPage locale={locale}
                                 setValue={val => setValue(val)}
                                 setIsLogin={val => setIsLogin(val)}
                                 setLocale={loc => setLocale(loc)}/>
                </StyledBox>
            </>
        );
    } else {
        return (
            <>
                <div className="bg-image-blurred">photo by</div>
                <StyledBox isLogin={false}>
                    <LoginPage locale={locale}
                               value={value}
                               setValue={val => setValue(val)}
                               setIsLogin={val => setIsLogin(val)}
                               setLocale={loc => setLocale(loc)}/>
                </StyledBox>
            </>

    );
    }
};

export default App;
