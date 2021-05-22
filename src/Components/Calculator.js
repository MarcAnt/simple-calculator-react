import React from 'react'
import {GlobalStyle, Wrapper, CalculatorWrapper} from '../Styles/CalculatorStyles'
import CalculatorFunctions from '../functions/CalculatorFunctions'
import Output from './Output'
import Keys  from './Keys'
const Calculator = () => {

    const {handleClick, num, numAc, result, operator} = CalculatorFunctions();
    return (
        <div>
            <GlobalStyle />
            <Wrapper>
                <CalculatorWrapper>
                
                    <Output num={num} numac={numAc} result={result} operator={operator} />
                    <Keys handleClick={handleClick}/>
                 
                </CalculatorWrapper> 
            </Wrapper>
        </div>
    )
}




export default Calculator;
