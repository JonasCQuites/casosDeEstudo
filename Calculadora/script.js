
function insert(num){
    let res = document.getElementById('resultado')
    res.innerHTML += num    
}
function limpar(){
    let res = document.getElementById('resultado')
    res.innerHTML = ""
}
function voltar(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado) //eval analisa os operadores da calculadora dentro da div resultado e aplica as fórmulas automaticamente.
    }
}