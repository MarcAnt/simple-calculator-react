import React from 'react';
import styled from 'styled-components';
import OutputResult from './OutputResult';

const Output = ({num, numac, operator, result}) => {


    let res;
    // Mostrar mensaje de error cuando el resultado no es un op matematica valida
    if(isNaN(result)) {
        res = 'Error';
    }else {
        res = `${num.toString()}${operator.toString()}${numac === '0' ? '' : numac.toString()}`; 
    }
    
    return (
        <>
            <OutputResult  result={result}   />
            <DisplayOperators type="text" readOnly value={res} />
        </>
    )
}

const DisplayOperators = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    padding: 1rem 0 .5rem 0;
    text-align: right;
    color: white;
    font-family: sans-serif;
    font-size: 2.3rem;
`;


export default Output;