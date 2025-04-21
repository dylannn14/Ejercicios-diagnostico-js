const Usuario = prompt ("Ingrese su nombre de usuario: admin/cliente/invitado")
do{
    switch (Usuario){
        case 1:
            if (Usuario == "admin")
                console.log("Bienvenido administrador, Acceso completo")
            break
        case 2:
            if (Usuario == "cliente")
                console.log("Hola cliente, acceso a tu panel de usuario")
            break
        case 3:
        if (Usuario == "invitado")
            console.log("Bienvenido invitado, acceso limitado activado")
            break
    }                
}while("usuario no encontrado, Ingrese un usuario valido")
