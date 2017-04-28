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
    codigo.innerHTML=aleatorio(caracteres);
    function a(vv){
      if(valor.value==codigo.value){
        alert("no eres un robot")
      }
    }
    valor.onblur=a(vvv)
    
});
image.addEventListener("click", function(){
    codigo.innerHTML=aleatorio(caracteres);
});
