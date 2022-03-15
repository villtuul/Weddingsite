import './App.scss';
import React from "react";
import ContentPage from "./components/ContentPage";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import LanguageSelector from "./components/LanguageSelector";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as translation from "./translations/translation.json";

const App = () => {
    const [locale, setLocale] = React.useState("fi");
    let location = useLocation();
    let navigate = useNavigate()

    return (
    <div>
        <TransitionGroup className="overlay">
            <CSSTransition key={location.key} classNames="fade" timeout={900}>
                <Routes location={location}>
                    <Route path="/login" element={<LoginPage locale={locale} navigate={navigate} />}/>
                    <Route exact path="/" element={<LoginPage locale={locale} navigate={navigate} />}/>
                    <Route exact path="/content" element={<ContentPage locale={locale}/>}/>
                    <Route exact path="/admin" element={<AdminPage locale={locale}/>}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>

        <div className="footer">
            <LanguageSelector className ="inline-block" changeLanguage={lan => setLocale(lan)} />
            <a className="logoutbtn inline-block"
               style={{display: location.pathname === '/login' ? 'none' : 'block' }}
               onClick={() => {fetch('/perform_logout', {method: 'POST'}).finally(v => {navigate('/login');})}}>
                {translation[locale].logout}
            </a>
        </div>
    </div>
    );
};

export default App;
