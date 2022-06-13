import * as translation from "../translations/translation.json";
import RegistrationForm from "./RegistrationForm";
import route from "../images/route.png";
import "../App.scss";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const ContentPage = ({locale}) => {
    return (
        <div className="contentbox loggedin">
            <p>{translation[locale].text1}</p>
            <h1>{translation[locale].title}</h1>
            <p>{"24.09.2022"}</p>
            <p>{translation[locale].time}</p>
            <p>{translation[locale].text2}</p>
            <p>{translation[locale].text3}</p>
            <h2>{translation[locale].info}</h2>
            <p>{translation[locale].text7}</p>
            <p>{translation[locale].text4}</p>
            <p>{translation[locale].text8}</p>
            <p>{translation[locale].text5}</p>
            <p>{translation[locale].text6}</p>
            <h2>{translation[locale].registration}</h2>
            <RegistrationForm locale={locale}/>
        </div>
    );
}

export default ContentPage;