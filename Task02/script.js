alert("estou funcionando")

function calc(id1, id2, respId, operador){
    var num1 = parseFloat(document.getElementById(id1).value);
    var num2 = parseFloat(document.getElementById(id2).value);
    console.log(num1, num2);

    var resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2; 
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
          if (num2 !== 0) {
            resultado = num1 / num2;
          } else {
            resultado = "Erro por divisão por 0!"
          }
            break;

        default:
            break;
    }
    document.getElementById(respId).textContent = resultado

}

