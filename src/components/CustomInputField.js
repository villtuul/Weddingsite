import React from "react";
import styled from "styled-components";


let timer = null;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${props => (props.type === "Code" ? "margin: 5vh 10vh;" : "margin: 2vh 10vh;")} 
    position: relative;
        
    & > input, & > textarea {
        color: white;
        border: 0.5vh solid ${props => (props.validationResult === "Incorrect" ? "#e77674" :
        (props.validationResult === "Correct" ? "#2bfd01" : "#eee"))};
        border-radius: 0.25rem;
        background-color: transparent;
        outline: none;
        padding: 12px 3px 12px 15px;
        font-size: 16px;
        transition: all 0.2s ease;
        z-index: 500;
    }
    & > textarea {
        resize: none;
        overflow: hidden;
        height: 10vh;
    }
    & > label {
        color: ${props => (props.validationResult === "Incorrect" ? "#e77674" :
    (props.validationResult === "Correct" ? "#2bfd01" : "#eee"))};
        position: absolute;
        top: 15px;
        left: 15px;
        transition: all 0.2s ease;
        z-index: 500;
        
    ${props =>
    props.focused &&
    `
        top: 5px;
        font-size: 15px;
        transform: translateY(-23px) translateX(-5px);
        z-index: 501;
        `
}
`;


/**
 * A Plaid-inspired custom input component
 *
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {function} onChange - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */
const Input = ({
                   value,
                   type,
                   label,
                   onChange,
                   setIsLogin,
                   onFocus,
                   onBlur,
                   setRef,
                   ...props
               }) => {
    const [focused, setFocused] = React.useState(false);
    const [validationResult, setValidationResult] = React.useState(null);

    const handleOnFocus = () => {
        setFocused(true);
        onFocus();
    };

    const handleOnBlur = () => {
        setFocused(false);
        onBlur();
    };

    const validateValue = val => {
        // TODO: add serverside validation
        if (val === ""){
            setValidationResult(null)
            setIsLogin(false);
        } else if (val === "240922") {
            setValidationResult("Correct");
            timer = setTimeout(() => {
                setIsLogin(true);
            }, 1000);
        } else {
            setValidationResult("Incorrect");
            setIsLogin(false);
        }
    };

    const handleKeyDown = event => {
        clearTimeout(timer)
        if (type === "Code" && (event.key === 'Enter' || event.key === 'Tab')){
            validateValue(value)
        }
    }

    const handleOnChange = val => {
        // Do not allow too long inputs
        if ((type==='textarea' && val.length > 500) ||
            val.length > 50) return;

        if (type==="Code"){
            clearTimeout(timer);
            timer = setTimeout(() => {
                validateValue(val);
            }, 3000);
        }
        onChange(val);
    };

    const renderLabel = () => {
        if (label) {
            if (validationResult) {
                return <label>{validationResult}</label>;
            }
            return <label>{label}</label>;
        }
        return null;
    };

    const isFocused = focused || String(value).length;
    const CustomTag = type === 'textarea' ? 'textarea' : 'input';
    return (
        <InputContainer type={type} focused={isFocused} validationResult={validationResult}>
            {renderLabel()}
            <CustomTag
                value={value}
                type={type}
                onChange={e => handleOnChange(e.target.value)}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyDown={handleKeyDown}
                ref={ref => setRef(ref)}
                {...props}
            />
        </InputContainer>
    );
};

Input.defaultProps = {
    type: "text",
    label: "",
    onChange: text => {
        console.error(`Missing onChange prop: ${text}`);
    },
    onFocus: () => {},
    onBlur: () => {},
    setRef: () => {}
};

export default Input;