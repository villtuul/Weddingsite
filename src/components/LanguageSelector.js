import styled from "styled-components";

import fi from "../images/fi.svg";
import en from "../images/gb.svg";
import de from "../images/de.svg";
import se from "../images/se.svg";

const Icon = styled.button`
    appearance:none;
    -webkit-appearance:none;
    background-color:transparent;
    border:none;
    outline:none;
    background-image:url("${props => props.imagePath}");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    height:3vh;
    width:4vh;
    cursor: pointer; /* Mouse pointer on hover */
    margin: 5px;
    
    :hover {
        filter: grayscale(100%);
        transition: all 0.5s ease;
    }
`;


const LanguageSelector = ({changeLanguage}) => {
    return (
        <div>
            <Icon imagePath= {en} onClick={() => changeLanguage("en")}/>
            <Icon imagePath= {fi} onClick={() => changeLanguage("fi")}/>
            <Icon imagePath= {de} onClick={() => changeLanguage("de")}/>
            <Icon imagePath= {se} onClick={() => changeLanguage("se")}/>
        </div>
    );
}

export default LanguageSelector;