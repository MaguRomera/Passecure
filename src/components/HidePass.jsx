import Eye from "../media/eye.svg";
import EyeClosed from "../media/eye-closed.svg";

export function HidePass(props){
    const hidePassState = () => {

        props.sethidePass(!props.hidePass)
    }
    return(
        <button className="HidePass" 
        onClick={hidePassState}
        title={props.hidePass ? "Hide password" : "Show password"}>
            <img 
            src={props.hidePass ? EyeClosed : Eye}  
            className="HidePassIcon"/>
        </button>
    ) 
}