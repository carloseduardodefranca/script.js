var titulo = document.getElementById("titulo")


var btn = document.querySelector("#btn")

function disparaAlerta(){
 var body = document.querySelector("body")
 body.classList.add("dark-mode")
} 
btn.addEventListener("click", disparaAlerta)