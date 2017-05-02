var codigo=document.getElementById("numero");
var image=document.getElementById("imagen");
var valor=document.getElementById("escribir");
var caracteres = "0123456789abcdefghijklmnopqrstuvwxyzfABCDEFGHIJKLMNOPQRSTUVWXYZ";

function aleatorio(chars){
code = "";
for (x=0; x < 7; x++)
{
rand = Math.floor(Math.random()*chars.length);
code += chars.substr(rand, 1);
}
	return code;
}
window.addEventListener("load", function(){
    codigo.innerText=aleatorio(caracteres);
		codigo.value=codigo.innerText
  var validar= function(){
		console.log(codigo.value);
		console.log(codigo.innerText);
      if(valor.value==codigo.value){
        alert("No eres un robot");
      }else if (valor.value!==codigo.value) {
      	alert("Oh Noes!! Tu eres un robot");
      }}
    valor.onblur=validar;

});
image.addEventListener("click", function(){
		codigo.innerText=aleatorio(caracteres);

});
