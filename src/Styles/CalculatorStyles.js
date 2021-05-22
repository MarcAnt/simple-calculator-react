import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

export const Wrapper = styled.div`
width: 100%;
`; 

export const CalculatorWrapper = styled.div`
width:35%;
display: flex;
justify-content: center;
align-item: center;
flex-direction: column;
margin: 0 auto;
`;

export const KeysWrapper = styled.div`
display: grid;
gap: 5px;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 7rem);
`;

export const Button = styled.input`
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

export const ButtonOperator = styled(Button)`
background-color: #131313;
`;

export const ButtonClear = styled(ButtonOperator)`
grid-column: span 2;
`; 

export const ButtonEqueal = styled(Button)`
background-color: #13505E;
grid-column: span 2;
&:hover {
    background-color: #038CAC; 
}

`;
