import { useState } from "react";

export default function CalculatorFunctions() {

  const [operator, setOperator] = useState<string>("");
  const [num, setNum] = useState<string>("0");
  const [numAc, setNumAc] = useState<string>("0");


  //Solo para el valor final
  const [result, setResult] = useState<string>("");

  // Dar valor para realizar un calculo

  const setOnlyNum = (value: string):void => {

    if (!operator) {
      if (
        value !== "=" &&
        value !== "+" &&
        value !== "-" &&
        value !== "/" &&
        value !== "*" &&
        value !== "DEL" &&
        value !== "C"
      ) {
        //Al tener un valor inicial de 0 se evalua si num tiene ese valor aun
        if (num === "0") {
          //Si el valor comienza con . se le agrega un 0 delante
          if (value === ".") {
            let float = "0" + value;
            setNum(float);
          } else {
            setNum(value);
          }
        } else {
          // Cuando el input no este y ya exista un resultado, se restean los valores
          if (value !== "" && result !== "") {
            setNum(value);
            setOperator("");
            setNumAc("0");
            setResult("");
          } else {
            //Al final se van stackeando los valores
            setNum(num => num += value);
            // setNum(num += value);
          }
        }
      }
    }
  };

  // Dar valor al nuevo valor luego de clickear algun signo
  const setOnlyNumAc = (value: string):void => {
    if (operator) {
      if (
        value !== "=" &&
        value !== "+" &&
        value !== "-" &&
        value !== "/" &&
        value !== "*" &&
        value !== "DEL" &&
        value !== "C"
      ) {
        //si el valor es 0 o su valor inicial es 0, se resetea
        if (numAc === "0") {
          setNumAc(value);
        } else {
          // setNumAc((numAc += value));
          setNumAc((numAc => numAc += value));
        }
      }
    }
  };

  // Obtener solo el signo
  const setOnlyOp = (value: string):void => {
    if (value === "+" || value === "-" || value === "/" || value === "*") {
      setOperator(value);
    }
  };

  // Resetear todos los valores
  const setClear = (value: string):void => {
    if (value === "C") {
      value = "0";
      setOperator("");
      setNum("0");
      setNumAc("0");
      setResult("");

    //   setShowValues([]);
    }
  };

  // Eliminiar el ultimo numero del valor actual
  const deleteInput = (value: string):void => {
    if (value === "DEL") {
      if (!operator) {
        // si no hay valor, lo regresa a 0
        if (num === "") {
          setNum("0");
        } else {
          let str = num;
          str = str.toString().substr(0, str.length - 1);
          setNum(str);
        }
      } else {
        //Si el ultimo valor esta vacio se resetea el valor del operador
        if (numAc === "") {
          setOperator("");
        }

        let str = numAc;
        str = str.toString().substr(0, str.length - 1);
        setNumAc(str);
      }
    }
  };

  // Realizar los calculos
  let res: number;
  const compute = (sign: string, num: string, numac:string):void => {
    switch (sign) {
      case "+":
        res = Number(num) + Number(numac);
        // console.log(res);

        setNum(String(res));
        setResult(String(res));
        setNumAc("0");
        break;

      case "-":
        res = Number(num) - Number(numac);
        // console.log(res);

        setNum(String(res));
        setResult(String(res));
        setNumAc("0");
        break;

      case "/":
        res = Number(num) / Number(numac);
        // console.log(res);

        setNum(String(res));
        setResult(String(res));
        setNumAc("0");
        break;

      case "*":
        res = Number(num) * Number(numac);
        // console.log(res);

        setNum(String(res));
        setResult(String(res));
        setNumAc("0");
        break;

      default:
        break;
    }
  };

  //Obtener el resultado
  const getResult = (value: string):void => {
    // Se activa siempre y cuando el valor en =
    if (value === "=") {
      if (operator) {
        compute(operator, num, numAc);
        // Se limpian los valores cuando solo es igual y se setea el resultado en como nuevo valor si se quiere seguir operando
        setOperator("");
        setNum(String(res));
        setNumAc("0");
      }
    }

    if (value === "+") compute(operator, num, numAc);
    if (value === "-") compute(operator, num, numAc);
    if (value === "*") compute(operator, num, numAc);
    if (value === "/") compute(operator, num, numAc);

  };


  // const handleClick = (e: Event):void => {
  //   const target = e.target as HTMLButtonElement;

  //   setOnlyNum(target.value);
  //   setOnlyNumAc(target.value);
  //   setOnlyOp(target.value);
  //   setClear(target.value);
  //   deleteInput(target.value);
  //   getResult(target.value);
  // };

  const handleClick = (e: string):void =>{

    setOnlyNum(e);
    setOnlyNumAc(e);
    setOnlyOp(e);
    setClear(e);
    deleteInput(e);
    getResult(e);

  }

  return { handleClick, num, numAc, result, operator };
}
