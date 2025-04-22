import Copy from "../media/Copy.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CopyButton(props){
    
    const copyText = () => {
        navigator.clipboard.writeText(props.textInfo)
        toast.success(
            'Copied!', 
            {className: 'toast-custom', 
            autoClose: 1500,
            hideProgressBar: true} 
        );
    }
    return (
        <div>
            <button onClick={copyText} 
                className="CopyButton">
                <img 
                src={Copy} 
                className="CopyButtonIcon"
                title={"Copy"}/>
            </button>
            <ToastContainer />
        </div>
    )

}