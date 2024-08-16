function somar(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var resp = document.getElementById("respSoma")
    resp.textContent = n1 + n2;
}  

function subtrair(){
    var n1 = parseFloat(document.getElementById("n1-").value);
    var n2 = parseFloat(document.getElementById("n2-").value);

    var resp = document.getElementById("respSub")
    resp.textContent = n1 - n2;
}


function dividir(){
    var n1 = parseFloat(document.getElementById("n1/").value);
    var n2 = parseFloat(document.getElementById("n2/").value);

    var resp = document.getElementById("respDiv")
    resp.textContent = n1 / n2;

}

function multiplicar(){
    var n1 = parseFloat(document.getElementById("n1*").value);
    var n2 = parseFloat(document.getElementById("n2*").value);

    var resp = document.getElementById("respMul")
    resp.textContent = n1 * n2;


}

function media(){
    var m1 = parseFloat(document.getElementById("m1").value);
    var m2 = parseFloat(document.getElementById("m2").value);
    var m3 = parseFloat(document.getElementById("m3").value);

    var media = document.getElementById("respMed");
    var res = (m1 + m2 + m3)/3;

    if(res >= 7){
        media.textContent = res.toFixed(1)
        media.style.color = "green";
        //media.style.backgroundColor = "#65D186"; ---> função para mudar a cor de fundo da fonte
        //media.style.padding = "5px"  ---> função para aumentar o tamanho da fonte
    }
    else{
        media.textContent = res.toFixed(1);
        media.style.color = "red";
    }

}

function contar(){
    const num = parseFloat($("#numberInput").val());

    var resultadoStr = "";

    if(num <= 100){
        for(var cont = 1; cont <= num; cont++){
            resultadoStr = resultadoStr + cont + "<br>";
        }
        $("#result").html(resultadoStr);
    }else{
        $("#result").text("Digite um número menor que 100!!!");
    }
}
