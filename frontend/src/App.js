import ContentPage from "./components/ContentPage";
import LoginPage from "./components/LoginPage";
import './App.scss';
import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AdminPage from "./components/AdminPage";

function contentPage(locale, setLocale){
    return (
            <div className="contentbox loggedin">
                <ContentPage locale={locale}
                             setLocale={loc => setLocale(loc)}/>
            </div>
    );
}

function adminPage(locale, setLocale){
    return (
        <div className="contentbox loggedin">
            <AdminPage locale={locale}
                         setLocale={loc => setLocale(loc)}/>
        </div>
    );
}

function loginPage(locale,setLocale){
    return (
        <div className="contentbox logout">
            <LoginPage locale={locale}
                       setLocale={loc => setLocale(loc)}
            />
        </div>

    );
}

const App = () => {
    const [locale, setLocale] = React.useState("fi");

    return (

    <div className="overlay">
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={loginPage(locale, setLocale)}/>
                <Route exact path="/content" element={contentPage(locale, setLocale)}/>
                <Route exact path="/admin" element={adminPage(locale, setLocale)}/>
                <Route exact path="*"
                       element={<Navigate to="/login"/>}
                />
            </Routes>
        </BrowserRouter>
    </div>
    );
};

export default App;
