import React from "react";
import styled from "styled-components";


const InputDiv = styled.form`
    display: flex;
    flex-direction: column;
    ${props => (props.type === "Code" ? "margin: 5vh 10vh;" : "margin: 2vh 10vh;")} 
    width: min(90%,500px);  
    position: relative;
    & > input, & > textarea {
        color: white;
        border: 2px solid ${props => (props.validationResult === false ? "#e77674" :
        (props.validationResult === true ? "#2bfd01" : "#eee"))};
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        padding: 12px 3px 12px 15px;
        font-size: 16px;
        transition: all 0.2s ease;
        z-index: 500;
    }
    & > textarea {
        resize: vertical;
        overflow: hidden;
        height: 15vh;
    }
    & > label {
        color: ${props => (props.validationResult === false ? "#e77674" :
    (props.validationResult === true ? "#2bfd01" : "#eee"))};
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
 * @param {function} onChangeCallback - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */
const InputField = ({
                   type,
                   label,
                   onChange: onChangeCallback,
                   validationResult,
                   ...props
               }) => {
    const [focused, setFocused] = React.useState(false);
    const [value, setValue] = React.useState("");

    const handleOnFocus = () => {
        setFocused(true);
    };

    const handleOnBlur = () => {
        setFocused(false);
    };

    const handleOnChange = val => {
        // Do not allow too long inputs
        if ((type ==='textarea' && val.length > 500) ||
            (type !=='textarea' && val.length > 50)) return;
        setValue(val);
        onChangeCallback(val);
    };

    const isFocused = focused || String(value).length;
    const CustomTag = type === 'textarea' ? 'textarea' : 'input';

    return (
        <InputDiv type={type} focused={isFocused} validationResult={validationResult}>
            <label>{label}</label>
            <CustomTag
                value={value}
                type={type}
                onChange={e => handleOnChange(e.target.value)}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                autoComplete="off"
                {...props}
            />
        </InputDiv>
    );
};

InputField.defaultProps = {
    type: "input",
    label: ""
};

export default InputField;