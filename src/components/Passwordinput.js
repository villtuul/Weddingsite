import React from "react";
import styled from "styled-components";

class Passwordinput extends React.Component {
    constructor(props) {
        super(props);
        this.timeoutId = null;
        this.passcodeFalse = "Incorrect";
        this.defaultInputValue = "Code";
        this.passcodeCorrect = "Correct";
        this.passcode = "tuuliot2022";
        this.focused = false;
        this.validateResult = null;
        this.isFocused = this.focused || String(props.value).length || props.type === "date";


        // Input field's style
        this.InputContainer = styled.div`
            display: flex;
            flex-direction: column;
            margin: 5vh 10vh;
            position: relative;
            
            & > input {
                border: 0.5vh solid ${props => (props.validateResult == this.passcodeFalse ? "#e77674" : "#eee")};
                border-radius: 0.25rem;
                color: white;
                background-color: transparent;
                outline: none;
                padding: 12px 3px 12px 15px;
                font-size: 16px;
                transition: all 0.2s ease;
                z-index: 500;
            }
            & > label {
                color: #757575;
                position: absolute;
                top: 15px;
                left: 15px;
                transition: all 0.2s ease;
                z-index: 500;
                ${props => props.focused && `
                    top: 5px;
                    font-size: 13px;
                    transform: translateY(-23px) translateX(-5px);
                    z-index: 501;
                    padding: 0 8px;
                `}
            `;
    }

    handleOnFocus() {
        this.focused = true;
    };

    handleOnBlur() {
        this.focused = false;
    };

    validateValue(val) {
        // 1. Empty value
        if (val === "") {
            this.validateResult = null;
            // 2. Incorrect passcode
        } else if (val !== this.passcode) {
            this.validateResult = this.passcodeFalse;
            // 3. Correct passcode.
        } else {
            this.validateResult = this.passcodeCorrect;
        }
    };

    // Handles input change. Input is validated one second after user has stopped writing.
    handleOnChange(val) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            // validateValue(val);
        }, 1000)
    };

    renderLabel() {
        if (this.validateResult !== null) {
            return <label>{this.validateResult}</label>;
        }
        return <label>{this.label}</label>;
    };


    render() {
        return (
            // <InputContainer focused={this.isFocused} validateResult={this.validateResult}>
            //     {renderLabel()}
            //     <input
            //         value={value}
            //         type={type}
            //         onChange={e => handleOnChange(e.target.value)}
            //         onFocus={handleOnFocus}
            //         onBlur={handleOnBlur}
            //         ref={ref => setRef(ref)}
            //         {...props}
            //     />
            // </InputContainer>
            <></>
        )
    };
}