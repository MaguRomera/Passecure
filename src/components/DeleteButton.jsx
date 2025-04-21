import close from "../media/close.svg";


export function DeleteContent(props){

    const deleteContent= () => {
        props.setTextInfo("")
        props.validationFunc("")
    }
    
    return (
        <button onClick={deleteContent} className="DeleteButton">
            <img 
            src={close} 
            className="DeleteButtonIcon"
            title="Delete"/>
        </button>
    )

}