import './App.scss';
import React from "react";
import ContentPage from "./components/ContentPage";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import LanguageSelector from "./components/LanguageSelector";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {TransitionGroup, CSSTransition, Transition} from "react-transition-group";
import * as translation from "./translations/translation.json";
import HttpsRedirect from 'react-https-redirect';

const App = () => {
    const [locale, setLocale] = React.useState("fi");
    let location = useLocation();
    const { pathname, key } = location;
    let navigate = useNavigate();

    return (
    <div>
        <TransitionGroup className="overlay">
            <CSSTransition unmountOnExit
                           timeout={2000}
                           classNames="icon">
                <HttpsRedirect>
                    <Routes location={location}>
                        <Route path="/login" element={<LoginPage locale={locale} navigate={navigate} />}/>
                        <Route exact path="/" element={<LoginPage locale={locale} navigate={navigate} />}/>
                        <Route exact path="/content" element={<ContentPage locale={locale}/>}/>
                        <Route exact path="/admin" element={<AdminPage locale={locale}/>}/>
                    </Routes>
                </HttpsRedirect>
            </CSSTransition>
        </TransitionGroup>

        <div className="footer">
            <LanguageSelector className ="inline-block" changeLanguage={lan => setLocale(lan)} />
            <a className="logoutbtn inline-block"
               style={{display: (location.pathname === '/login' || location.pathname === '/') ? 'none' : 'block' }}
               onClick={() => {fetch('/perform_logout', {method: 'POST',}).finally(v => {navigate('/login');})}}>
                {translation[locale].logout}
            </a>
        </div>
    </div>
    );
};

export default App;
