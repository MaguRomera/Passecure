import { useState } from "react"

export function ValidationSign(props){
    
    var validationState = "Unsafe"

    if(props.validatePass==0){
        validationState="Unsafe"
    } else if(props.validatePass==1){
        validationState="Weak"
    } else if(props.validatePass==2){
        validationState="Okay"
    } else if(props.validatePass==3){
        validationState="Safe"
    } else if(props.validatePass==4){
        validationState="Very Safe"
    }

    return (
        <h2 className="ValidationSign">
            {validationState}
        </h2>
    )

}