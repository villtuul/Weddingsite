const LanguageSelector = ({changeLanguage}) => {
    return (
        <>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("fi")}>Finnish</button>
            <button onClick={() => changeLanguage("de")}>Detusch</button>
        </>
    );
}

export default LanguageSelector;