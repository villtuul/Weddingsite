import styled from "styled-components";

const Icon = styled.button`

`;


const LanguageSelector = ({changeLanguage}) => {

    return (
        <div>
            <Icon onClick={() => changeLanguage("en")}>English</Icon>
            <Icon onClick={() => changeLanguage("fi")}>Finnish</Icon>
            <Icon onClick={() => changeLanguage("de")}>Detusch</Icon>
        </div>
    );
}

export default LanguageSelector;