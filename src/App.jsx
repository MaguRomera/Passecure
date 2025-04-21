import './Styles/App.css'
import {MusicToggle} from './components/MusicToggle.jsx'
import {GitButton} from './components/GitButton.jsx'
import { PassInput } from './components/PassInput.jsx';
import Background from "./media/background2.gif";
import { useState } from 'react';
import { HidePass } from './components/HidePass.jsx';
import { ValidationSign } from './components/ValidationSign.jsx';
import { CopyButton } from './components/CopyButton.jsx';
import { GeneratePassword } from './components/PassGenerator.jsx';
export function App(){

    var [hidePassword, sethidePassword] = useState(false)
    var [validatePass, setValidatePass] = useState(0)
    var [textInfo, setTextInfo] = useState('')
    const validationFunc = (password) => {
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
        let secure = 0
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

        setValidatePass(secure)
    }

    return(
        <div>
            <img src={Background} className='background'/>
            <header className='buttons-cnt'>
                <GitButton/>
                <MusicToggle/>
            </header>
           <div className='father-cnt'>
                <section className='title-cnt'> 
                    <h1 className='title'>P A S S E C U R E</h1>
                </section>
                <span className='valipass-cnt'>
                    <section className='password-cnt'>
                        <PassInput 
                            hidePass={hidePassword}
                            setValidatePass={setValidatePass}
                            setTextInfo={setTextInfo}
                            textInfo={textInfo}
                            validationFunc={validationFunc}
                        />
                        <HidePass
                            sethidePass={sethidePassword}
                            hidePass={hidePassword}
                        />
                        <CopyButton
                            textInfo={textInfo}
                        />
                        <GeneratePassword
                            setTextInfo={setTextInfo}
                            validationFunc={validationFunc}
                            setValidatePass={setValidatePass}
                        />
                    </section>
                    <ValidationSign
                        validatePass={validatePass}
                    />
                </span>
           </div>
        </div>
    )
}