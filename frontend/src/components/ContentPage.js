import * as translation from "../translations/translation.json";
import RegistrationForm from "./RegistrationForm";
import Parser from 'html-react-parser';
import "../App.scss";
import "react-alice-carousel/lib/alice-carousel.css";

const ContentPage = ({locale}) => {
    let poem = translation[locale].text5;
    return (
        <div className="contentbox loggedin">
            <p>{translation[locale].text1}</p>
            <div className="contenttitle">
                <h1>{translation[locale].title}</h1>
                24.09.2022
                <br/>{translation[locale].time}
            </div>
            <p>{translation[locale].text2}</p>
            <p>{translation[locale].text3}</p>
            <h2>{translation[locale].info}</h2>
            <p>{translation[locale].text7}</p>
            <p>{translation[locale].text4}</p>
            <p>{translation[locale].text8}</p>
            <div className="poem">{Parser(poem)}</div>
            <p>{translation[locale].text6}</p>
            <h2>{translation[locale].registration}</h2>
            <RegistrationForm locale={locale}/>
        </div>
    );
}

export default ContentPage;