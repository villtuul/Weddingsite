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
                <img src={"https://files.venuu.se/attachments/000/099/639/152e52169dceddc1d058cb45c07557c7b16f6b80.jpg"}
                     className="sliderimg" alt={"Turun linna"}/>
                <img src={"https://files.venuu.se/attachments/000/030/620/f328c1ce6d0f1dc48a5c4fdac2eb0a12a9d84d33.jpg"}
                     className="sliderimg" alt={"Manilla"}/>
                <img src={"https://files.venuu.se/attachments/000/099/641/ae797dd28b55fa39592065eba9b12b47c0c6f943.jpg"} className="sliderimg" alt={"Route from castle to Manilla"}/>
            </AliceCarousel>
            <p>{translation[locale].text}</p>
        </div>
    );
}

export default ContentPage;