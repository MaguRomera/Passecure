import { useState } from "react";
import Reload from "../media/reload.svg"

export function GeneratePassword(props){

    
    const randomPass = () => { //pasar como prop el largo de la contraseña y los parámetros de usuario
        const charArray = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','&','*','_','+','=',',','.','?'
        ];
    
        let result = ""
        for (let i=0; i<8; i++){ //en lugar de i<8, i<passlength
            //acá iría la validación según los parámetros del usuario
            result += charArray[Math.floor(Math.random()*charArray.length)]
        }
        props.setTextInfo(result)
    }
    
    //para los ajustes, hacer un if que valide que la condición del usuario se cumpla Y que el caracter coincida
    return (
        <button onClick={randomPass} 
            className="PassGenerator"
            title="Generate password">
            <img 
            src={Reload} 
            className="PassGeneratorIcon"
            />
        </button>
    )

}