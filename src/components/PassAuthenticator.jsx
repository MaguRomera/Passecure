import { useState } from "react";

export function PassAuthenticator(){

    const [password] = useState([])
    var isSecure = useState(0)
    var UpperCase = useState(0)
    var LowCase = useState(0)
    var Symbol = useState(0)
    var Number = useState(0)

    const separateCharacters = () => {
        for (char in password){
            if (/[A-Z]/.test(char)) UpperCase++
            else if (/[a-z]/.test(char)) LowCase++
            else if (/[0-9]/.test(char)) Number++
            else if (/[\_\?\*\!\.\$\@\#\+\,\=\&)]/.test(char)) Symbol++
            //acá quiero hacer un cartelito que me diga cuando lo que ingresé
            //no es válido para una contraseña

            //cómo hago que este componente le envíe una señal al cartelito de seguridad?
            //cómo hago páginas?
        }
        
        if(UpperCase>=1 & Number>=1 & Symbol>=1 & password.length>=8) isSecure=4
        if(UpperCase>=1 & Number>=1 & password.length>=8) isSecure=3
        if(UpperCase>=1 & password.length>=8) isSecure=2
        if(password.length>=8) isSecure=1
        if(password.length<8) isSecure=0

    }

    return(
        <input type={definirfuncion ? text : password} /> //arreglar después (?)
    )
}