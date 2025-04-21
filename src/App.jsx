import './Styles/App.css'
import {MusicToggle} from './components/MusicToggle.jsx'
import {GitButton} from './components/GitButton.jsx'
import { PassAuthenticator } from './components/PassAuthenticator.jsx';
import Background from "./media/background2.gif";
import { useState } from 'react';
import { HidePass } from './components/HidePass.jsx';
import { ValidationSign } from './components/ValidationSign.jsx';
import { CopyButton } from './components/CopyButton.jsx';
export function App(){

    var [hidePassword, sethidePassword] = useState(false)
    var [validatePass, setValidatePass] = useState(0)
    var [textInfo, setTextInfo] = useState("")

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
                        <PassAuthenticator 
                            hidePass={hidePassword}
                            setValidatePass={setValidatePass}
                            setTextInfo={setTextInfo}
                        />
                        <HidePass
                            sethidePass={sethidePassword}
                            hidePass={hidePassword}
                        />
                        <CopyButton
                            textInfo={textInfo}
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