import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    color: white;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: fixed;
    top: ${props => (props.isLogin ? "50%":"50%")};
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90vh;
    width: ${props => (props.isLogin ? "80%":"50%")};
    min-width: 7cm;
    text-align: center;
    transition: all 0.2s ease;
    
    ::-webkit-scrollbar {
        width: .6em;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,1.2); 
    }
`;

export default StyledBox;