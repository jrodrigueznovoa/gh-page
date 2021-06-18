function validarFomulario(){
    let datos = new Object();

    var nombre = document.getElementById("name_form").value;
    var email = document.getElementById("email_form").value;
    var mensaje = document.getElementById("message_form").value;

    if (nombre.length < 5){
        document.getElementById("msgNombre").innerText = "Ingrese un nombre correcto";
    }else{
        document.getElementById("msgNombre").innerText = "";
        datos['Nombre'] = nombre;
    }
    
    if(email.length > 0){
        var regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(email)){
            document.getElementById("msgCorreo").innerText = "Ingrese un correo valido";
        }else {
            document.getElementById("msgCorreo").innerText = "";
            datos['Email'] = email;
        }
    }else {
        document.getElementById("msgCorreo").innerText = "El correo es obligatorio";
    }

    if (mensaje.length < 20){
        document.getElementById("msgMessage").innerText = "Debe ingresar al menos 20 caracteres";
    }else{
        document.getElementById("msgMessage").innerText = "";
        datos['Mensaje'] = mensaje;
    }

}