import { useState } from "react";

export function PassAuthenticator(props){

    const [password, setPassword] = useState("")
    var [isSecure, setisSecure] = useState(0)

    const separateCharacters = () => {
        var UpperCase = 0
        var LowCase = 0
        var Symbol = 0
        var Number = 0
        for (char in password){
            if (/[A-Z]/.test(char)) UpperCase++
            else if (/[a-z]/.test(char)) LowCase++
            else if (/[0-9]/.test(char)) Number++
            else if (/[\_\?\*\!\.\$\@\#\+\,\=\&)]/.test(char)) Symbol++
        }
        
        if(UpperCase>=1 & Number>=1 & Symbol>=1 & password.length>=8) setisSecure(4)
        if(UpperCase>=1 & Number>=1 & password.length>=8) setisSecure(3)
        if(UpperCase>=1 & password.length>=8) setisSecure(2)
        if(password.length>=8) setisSecure(1)
        if(password.length<8) setisSecure(0)
    }

    return(
        <input 
        type={props.hidePass ? "text" : "password"}
        name="password"
        value={password}
        placeholder="Insert your password..."
        className="PasswordAuthenticator"        
        onChange={event =>{setPassword(event.target.value)}}
        />
    )
}