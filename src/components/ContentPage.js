import * as translation from "../translations/en.json";
import LanguageSelector from "./LanguageSelector";

const ContentPage = ({locale, setValue, setIsLogin, setLocale}) => {
    return (
        <>
            <h1>{translation[locale].title}</h1>
            <p>{translation[locale].text}</p>
            <h2>{translation[locale].location}</h2>
            <p>{translation[locale].text}</p>
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