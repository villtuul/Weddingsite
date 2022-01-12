import * as translation from "../translations/en.json";
import LanguageSelector from "./LanguageSelector";
import route from "../route.png";

const ContentPage = ({locale, setValue, setIsLogin, setLocale}) => {
    return (
        <>
            <h1>{translation[locale].title}</h1>
            <p>{translation[locale].text}</p>
            <h2>{translation[locale].location}</h2>
            <p>{translation[locale].text}</p>
            <img src={"https://www.senaatti.fi/app/uploads/2017/05/1_extraLarge_865_-1024x825.jpg"} alt={"Turun linna"}/>
            <img src={"https://files.venuu.se/attachments/000/001/987/d89719bda40805e0a32931065b3d29e8615a2ab6.jpg"} alt={"Manilla"}/>
            <img src={route} alt={"Route from castle to Manilla"}/>
            <h2>{translation[locale].registration}</h2>

            <button onClick={() => {
                setValue("");
                setIsLogin(false);}}>
                Logout</button>
            <LanguageSelector changeLanguage={lan => setLocale(lan)} />
        </>
    );
}

export default ContentPage;