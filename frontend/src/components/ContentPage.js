import * as translation from "../translations/translation.json";
import RegistrationForm from "./RegistrationForm";
import route from "../images/route.png";
import "../App.scss";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const ContentPage = ({locale}) => {
    return (
        <div className="contentbox loggedin">
            <h1>{translation[locale].title}</h1>
            <p>{translation[locale].text}</p>
            <h2>{translation[locale].registration}</h2>
            <RegistrationForm locale={locale}/>
            <h2>{translation[locale].location}</h2>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={"https://www.senaatti.fi/app/uploads/2017/05/1_extraLarge_865_-1024x825.jpg"}
                     className="sliderimg" alt={"Turun linna"}/>
                <img src={"https://files.venuu.se/attachments/000/001/987/d89719bda40805e0a32931065b3d29e8615a2ab6.jpg"}
                     className="sliderimg" alt={"Manilla"}/>
                <img src={route} className="sliderimg" alt={"Route from castle to Manilla"}/>
            </AliceCarousel>
            <p>{translation[locale].text}</p>
        </div>
    );
}

export default ContentPage;