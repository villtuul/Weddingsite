import React from "react";
import styled from "styled-components";

let timer = null;

const StyledBox = styled.div`
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: fixed;
    top: ${props => (props.isLogin ? "50%":"50%")};
    transition: all 0.5s ease;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: ${props => (props.isLogin ? "80%":"50%")};
    min-width: 7cm;
    height: ${props => (props.isLogin ? "50vh":"calc(20vh + 50px)")};
    max-height: 200px
    padding: 20px;
    text-align: center;
`;

const InputContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    margin: 5vh 10vh;
    position: relative;
        
    & > input {
        border: 0.5vh solid ${props => (props.validationResult === "Incorrect" ? "#e77674" :
    (props.validationResult === "Correct" ? "#2bfd01" : "#eee"))};
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
      if (val === ""){
        setValidationResult(null)
        setIsLogin(false);
      } else if (val === "tuuliot2022") {
        setValidationResult("Correct");
          timer = setTimeout(() => {
              setIsLogin(true);
          }, 1000);
      } else {
        setValidationResult("Incorrect");
        setIsLogin(false);
      }
  };

  const handleOnChange = val => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        validateValue(val);
        }, 1000);
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

  return (
    <InputContainer focused={isFocused} validationResult={validationResult}>
      {renderLabel()}
      <input
        value={value}
        type={type}
        onChange={e => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
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

const StartPage = () => {
    const [value, setValue] = React.useState("");
    const [isLogin, setIsLogin] = React.useState(false);

    if (isLogin) {
        return (
            <div>
                <StyledBox isLogin={true}>
                    <h1>Event</h1>
                    <p>aösldkfjaölskdjf
                    asöldfkjaösdlkfj
                    alskdjföalskdjf
                    asöldkjfaslädköfj
                    öasdölfkjasödlkfjaösldkjfölskadjf</p>
                    <Input type="Code" label="Code"
                           value={value}
                           onChange={val => setValue(val)}
                           setIsLogin={val => setIsLogin(val)}/>
                </StyledBox>
            </div>
        );
    } else {
        return (
            <div>
                <StyledBox isLogin={false}>
                    <h1>Event</h1>
                    <Input type="Code" label="Code"
                           value={value}
                           onChange={val => setValue(val)}
                           setIsLogin={val => setIsLogin(val)}/>
                </StyledBox>
            </div>
        );
    }
};

export default StartPage;

