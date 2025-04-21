import './Styles/App.css'
import {MusicToggle} from './components/MusicToggle.jsx'
import {GitButton} from './components/GitButton.jsx'
import { PassAuthenticator } from './components/PassAuthenticator.jsx';
import Background from "./media/background2.gif";
import { useState } from 'react';
import { HidePass } from './components/HidePass.jsx';
import { ValidationSign } from './components/ValidationSign.jsx';
export function App(){

    var [hidePassword, sethidePassword] = useState(false)
    var [validatePass, setValidatePass] = useState(0)

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
                        />
                        <HidePass
                            sethidePass={sethidePassword}
                            hidePass={hidePassword}
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