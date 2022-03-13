import * as translation from "../translations/translation.json";
import LanguageSelector from "./LanguageSelector";
import "../App.scss";
import "react-alice-carousel/lib/alice-carousel.css";

const ContentPage = ({locale, setLocale}) => {
    var guests = [];
    fetch("/api/guests", {
        method: "GET"
    })  .then(response => response.json())
        .then(data => guests = data);

    return (
        <>
            <ul>
                {guests.map((data) => (
                    <li key={data.id}>
                        <p>{data.firstName}</p>
                        <p>{data.lastName}</p>
                        <p>{data.message}</p>
                        <p>{data.participating}</p>
                    </li>
                ))}
            </ul>
            <LanguageSelector changeLanguage={lan => setLocale(lan)} />
            <a className="logoutbtn"
               tabIndex="999"
               onClick={() => {
                   fetch('/perform_logout', {
                       method: 'POST'
                   })
                       .then(v => {
                           if(v.redirected) window.location = v.url
                       })
                       .catch(e => {
                           console.warn(e);
                       })
               }}>
                {translation[locale].logout}</a>
        </>
    );
}

export default ContentPage;