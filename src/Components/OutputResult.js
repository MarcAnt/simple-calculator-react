import React from 'react'
import styled from 'styled-components';


const OutputResult = ({result}) => {

   

    return (
        <>
            <Result type="text" readOnly value={ (result === '0' ? '' : isNaN(result) ? 'Math Error' : result   ) }  />
        </>
    )
}

const Result = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    padding: 1.5rem 0 .1rem 0;
    text-align: right;
    color: white;
    font-family: sans-serif;
    font-size: 1.5rem;
`;


export default OutputResult;
