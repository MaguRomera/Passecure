export function PassInput(props){

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
            props.validationFunc(value);
        }}
        />
    )
}