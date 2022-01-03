import React from "react";
import styled from "styled-components";

import img from "../../background.jpeg"

const BackgroundImage = styled.div`
justify-content: center;
align-items: center;
    background-image: url(${img});
    filter: blur(8px);
    -webkit-filter: blur(8px);
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const StyledBox = styled.div`
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 50%;
    height: 20%;
    padding: 20px;
    text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15vh 0;
  position: relative;
  margin-top: 5vh;
  

  & > input {
    border: 0.5vh solid ${props => (props.error ? "#e77674" : "#eee")};
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

    ${props =>
      props.focused &&
      `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
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
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const validateValue = val => {
    if (type === "email") {
      // VERY simple email validation
      if (val.indexOf("@") === -1) {
        setError("email is invalid");
      } else {
        setError(null);
      }
    }

    // ... any other validation you could think of
    // ... maybe even pass in an additional validation function as a prop?
  };

  const handleOnChange = val => {
    validateValue(val);
    onChange(val);
  };

  const renderLabel = () => {
    if (label) {
      // if we have an error
      if (error) {
        return <label>{error}</label>;
      }

      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length || type === "date";

  return (
    <InputContainer focused={isFocused} error={error}>
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
    return (
        <div>
        <BackgroundImage/>
        <StyledBox>
            <h1>Event</h1>
            <Input type="Code" label="Code"
                  value={value}
                  onChange={val => setValue(val)}
    />
        </StyledBox>       
    
        </div>
    );
};
export default StartPage;


// <>
// <div class="st-image"></div>
// <h1 class= "st-text st-title">
// <h1>Event</h1>
// <div class="form__group">
//     <input type="text" class="form__input" id="name" placeholder="Code" required="" onChange={(e) => {this.handleChange(e)}}/>
//     <label for="name" class="form__label">Code</label>
// </div>
// </h1>
// </>

