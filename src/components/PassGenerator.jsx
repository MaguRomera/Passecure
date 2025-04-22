import Reload from "../media/reload.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function GeneratePassword(props){
    
    const randomPass = () => {


        const charArray = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','&','*','_','+','=',',','.','?'
        ];
    
        let result = ""
        
        for (let i=0; i<props.passLength; i++){ 
            
            let char = charArray[Math.floor(Math.random()*charArray.length)]
                     
            
            //condiciones de validación
            if (props.checkUpper==false, props.checkLower==false, props.checkSymbol==false, props.checkNumber==false){
                toast.error("Select at least one parameter", {
                    className: 'toast-custom', 
                    autoClose: 1500,
                    hideProgressBar: true
                })
                break
            } else if(props.checkUpper && /[A-Z]/.test(char)){
                result+=char
            }else if (props.checkLower && /[a-z]/.test(char)){
                result+=char
            }else if (props.checkNumber && /[0-9]/.test(char)){
                result+=char
            }else if (props.checkSymbol && /[\_\?\*\!\.\$\@\#\+\,\=\&\%]/.test(char)){
                result+=char
            }else{
                i--
            }
        }
        props.setTextInfo(result)
        props.validationFunc(result)
    }
    
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