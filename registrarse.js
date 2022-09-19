var send=document.querySelector("#send");

send.addEventListener("click",(e)=>{
    var telefono=document.querySelector("#telefono");
    var usuario=document.querySelector("#user");
    var password=document.querySelector("#password");

    
    if (usuario.value.length<=0) {
        e.preventDefault();
        alert("No puedes dejar el usuario en blanco")
    }
    else if(usuario.value.length>=30){
        e.preventDefault();
        alert("No puedes Escribir mas de 30 caracteres en el mensaje eso incluye los espacios")
    } 
    else if(telefono.value.length<=0){
        e.preventDefault();
        alert("No puedes dejar el telefono vacio")
    }
    else if(telefono.value.length<9){
        e.preventDefault();
        alert("Escribe un numero de telefono superior a 10 digitos")
    }
    else if(password.value.length<=0){
        e.preventDefault();
        alert("No puedes dejar la contraseña en blanco")
    }
    else if(password.value.length<8){
        e.preventDefault();
        alert("Escribe una contraseña superior a 8 digitos")
    }
   
    else{
       
    }
});