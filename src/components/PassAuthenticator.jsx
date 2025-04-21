import { useState } from "react";

export function PassAuthenticator(props){

    var [isSecure, setisSecure] = useState(0)

    const separateCharacters = (password) => {
        var UpperCase = 0
        var LowCase = 0
        var Symbol = 0
        var Number = 0
        for (const char of password){
            if (/[A-Z]/.test(char)) UpperCase++
            else if (/[a-z]/.test(char)) LowCase++
            else if (/[0-9]/.test(char)) Number++
            else if (/[\_\?\*\!\.\$\@\#\+\,\=\&\%]/.test(char)) Symbol++
        }
        
        var secure = 0
        //validation 
        if(UpperCase>=1 && Number>=1 && Symbol>=1 && password.length>=8) {
           secure=4
        } else if(UpperCase>=1 && Number>=1 && password.length>=8) {
            secure=3
        }else if(UpperCase>=1 && Symbol>=1 && password.length>=8) {
            secure=3
        }else if(Symbol>=1 && Number>=1 && password.length>=8) {
            secure=3
        }else if(UpperCase>=1 && password.length>=8) {
            secure=2
        }else if(password.length>=8){
            secure=1
        }else secure=0

        props.setValidatePass(secure)
        setisSecure(secure)
    }

    return(
        <input 
        type={props.hidePass ? "text" : "password"}
        name="password"
        placeholder="Insert your password..."
        className="PasswordAuthenticator"  
        value={props.textInfo}      
        onChange={event => {
            const value = event.target.value;
            props.setTextInfo(value);
            separateCharacters(value);
        }}
        />
    )
}