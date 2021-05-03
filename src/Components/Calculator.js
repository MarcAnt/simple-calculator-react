import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components';
import Output from './Output'



const Calculator = () => {

 
    let [operator, setOperator] = useState('');
    let [num, setNum] = useState('0');
    let [numAc, setNumAc] = useState('0');

   
    //Solo para el valor final
    const [result, setResult] = useState('');

    // Dar valor para realizar un calculo
    const setOnlyNum = (value) => {

        if(!operator) {

            if(value !== '=' 
            && value !== '+' 
            && value !== '-' 
            && value !== '/' 
            && value !== '*' 
            && value !== 'DEL' 
            && value !== 'C') {

                //Al tener un valor inicial de 0 se evalua si num tiene ese valor aun
                if (num === '0') {

                    //Si el valor comienza con . se le agrega un 0 delante
                    if (value === '.') {

                        let float = '0'+ value;
                        setNum(float);
                        
                    }else {
                        
                        setNum(value);
                    }

                }else {

                    // Cuando el input no ese y ya exista un resultado, se restean los valores 
                    if (value !== '' && result !== '') {

                        setNum(value);
                        setOperator('');
                        setNumAc('0');
                        setResult('');
                        
                    }else{
                        //Al final se van stackeando los valores
                        setNum(num += value);
                    }


                
                }
    
            }
        }


    };
    // Dar valor al nuevo valor luego de clickear algun signo 
    const setOnlyNumAc = (value) => {

        if(operator){

            if(value !== '=' 
            && value !== '+' 
            && value !== '-' 
            && value !== '/' 
            && value !== '*' 
            && value !== 'DEL' 
            && value !== 'C') {

                //si el valor es 0 o su valor inicial es 0, se resetea
                if (numAc === '0') {
                    
                    setNumAc(value);
                }else {
                    setNumAc(numAc += value);
                }
    
            }
        }


    };

    // Obtener solo el signo
    const setOnlyOp = (value) => {

        if(value === '+' 
        || value === '-' 
        || value === '/' 
        || value === '*'  
        ) {
            setOperator(value);
        }

    };

    // Resetear todos los valores
    const setClear = (value) => {

        if (value === 'C') {
            value = '0'
            setOperator('');
            setNum('0');
            setNumAc('0');
            setResult('');
        }

       
    };

    // Eliminiar el ultimo numero del valor actual
    const deleteInput = (value) => {
        if (value === 'DEL') {

            if(!operator) {
                // si no hay valor, lo regresa a 0
                if (num === '') {
                    setNum('0');
                }else {

                    let str = num;
                    str = str.toString().substr(0, str.length-1);
                    setNum(str);
                }

            }else {
                //Si el ultimo valor esta vacio se resetea el valor del operador
                if (numAc === '') {
                    setOperator('');
                }
                
                let str = numAc;
                str = str.toString().substr(0, str.length-1);
                setNumAc(str);
            }
        }
    };

    // Realizar los calculos 
    let res = '';
    const compute = (sign, num, numac) => {

            switch (sign) {
                case '+':
                    res = Number(num) + Number(numac);
                    // console.log(res);
    
                    setNum(res);
                    setResult(res);
                    setNumAc('0');
                    break;
    
                case '-':
                    res = Number(num) - Number(numac);
                    // console.log(res);
    
                    setNum(res);
                    setResult(res);
                    setNumAc('0');
                    break;
    
                case '/':
                    res = Number(num) / Number(numac);
                    // console.log(res);
    
                    setNum(res);
                    setResult(res);
                    setNumAc('0');
                    break;
    
                case '*':
                    res = Number(num) * Number(numac);
                    // console.log(res);
    
                    setNum(res);
                    setResult(res);
                    setNumAc('0');
                    break;
            
                default:
                    break;
            }
    
    };



    //Obtener el resultado
    const getResult = (value) => {

        // Se activa siempre y cuando el valor en =
        if (value === '=') {

            if (operator) {

                compute(operator, num, numAc);
                // Se limpian los valores cuando solo es igual y se setea el resultado en como nuevo valor si se quiere seguir operando 
                setOperator('');
                setNum(res);
                setNumAc('0');
            }
        
        }

        if(value === '+') compute(operator, num, numAc);
        if(value === '-') compute(operator, num, numAc);
        if(value === '*') compute(operator, num, numAc);
        if(value === '/') compute(operator, num, numAc);

    };
    
    
    console.log({num, numAc, result, operator});
    const handleClick = (e) => {
         
        setOnlyNum(e.target.value);
        setOnlyNumAc(e.target.value);
        setOnlyOp(e.target.value);
        setClear(e.target.value);
        deleteInput(e.target.value);
        getResult(e.target.value);
        
    }
    
    
    return (
        <div>
            <GlobalStyle />
            <Wrapper>
                <CalculatorWrapper>
                
                    <Output num={num} numac={numAc} result={result} operator={operator} />
    
                    <Keys>
                        
                        <ButtonClear type="button" value={'C'}  onClick={handleClick} />
                        <ButtonOperator type="button" value={'DEL'}  onClick={handleClick} />
                        <ButtonOperator type="button" value={'/'}  onClick={handleClick} />

                        <Button type="button" data-num value={'7'}  onClick={handleClick} />
                        <Button type="button" data-num value={'8'} onClick={handleClick} />
                        <Button type="button" data-num value={'9'}  onClick={handleClick} />
                        <ButtonOperator type="button" value={'*'}  onClick={handleClick} />

                        <Button type="button" data-num value={'4'}  onClick={handleClick} />
                        <Button type="button" data-num value={'5'}  onClick={handleClick} />
                        <Button type="button" data-num value={'6'}  onClick={handleClick} />
                        <ButtonOperator type="button" value={'-'}  onClick={handleClick} />

                        <Button type="button" data-num value={'1'}  onClick={handleClick} />
                        <Button type="button" data-num value={'2'}  onClick={handleClick} />
                        <Button type="button" data-num value={'3'}  onClick={handleClick} />
                        <ButtonOperator type="button" value={'+'} onClick={handleClick} />

                        <Button type="button" data-num value={'0'}  onClick={handleClick} />
                        <Button type="button" data-num value={'.'}  onClick={handleClick} />
                        <ButtonEqueal type="button" value={'='} onClick={handleClick} />


                    </Keys>
                </CalculatorWrapper> 
            </Wrapper>
        </div>
    )
}


const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
        font-family: sans-serif;
    }

    html, * {
        padding: 0; 
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1F1F1F;
    }

`; 

const Wrapper = styled.div`
    width: 100%;
`; 
    
const CalculatorWrapper = styled.div`
    width:35%;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
    margin: 0 auto;
`;

const Keys = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 7rem);
`;

const Button = styled.input`
    color: white;
    background-color: #060606;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5rem;
    transition: background-color .3s ease-in-out;
    &:hover {
        background-color: #595959; 
    }
`;

const ButtonOperator = styled(Button)`
    background-color: #131313;
`;

const ButtonClear = styled(ButtonOperator)`
    grid-column: span 2;
`; 

const ButtonEqueal = styled(Button)`
    background-color: #13505E;
    grid-column: span 2;
    &:hover {
        background-color: #038CAC; 
    }

`;



export default Calculator;
