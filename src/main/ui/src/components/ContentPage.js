import * as translation from "../translations/translation.json";
import LanguageSelector from "./LanguageSelector";
import RegistrationForm from "./RegistrationForm";
import route from "../route.png";
import "../App.scss";

const ContentPage = ({locale, setValue, setIsLogin, setLocale}) => {


    return (
        <>
            <h1>{translation[locale].title}</h1>
            <p>{translation[locale].text}</p>
            <h2>{translation[locale].registration}</h2>
            <RegistrationForm locale={locale}/>
            <h2>{translation[locale].location}</h2>
            <p><img src={"https://www.senaatti.fi/app/uploads/2017/05/1_extraLarge_865_-1024x825.jpg"} alt={"Turun linna"}/>
                <img src={"https://files.venuu.se/attachments/000/001/987/d89719bda40805e0a32931065b3d29e8615a2ab6.jpg"} alt={"Manilla"}/>
                <img src={route} alt={"Route from castle to Manilla"}/>
                {translation[locale].text}</p>
            <LanguageSelector changeLanguage={lan => setLocale(lan)} />
            <a className="logoutbtn"
               tabIndex="999"
               onClick={() => {
                   setValue("");
                   setIsLogin(false);
                   }}>
                Logout</a>
        </>
    );
}

export default ContentPage;