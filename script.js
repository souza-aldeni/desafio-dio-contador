function incrementa(){
    var contador = document.getElementById("result")
    var contador2 = document.getElementById("result2")
    contador.value = Number(contador.value)+1
    contador2.innerText = Number(contador2.innerText)+1
    if(Number(contador2.innerText) >= 0){
        contador2.style.color = "black"
    }
}
function decrementa(){
    var contador = document.getElementById("result")
    contador.value = Number(contador.value)-1
    var contador2 = document.getElementById("result2")
    contador2.innerText = Number(contador2.innerText)-1
    if(Number(contador2.innerText) < 0){
        contador2.style.color = "red"
    }
}