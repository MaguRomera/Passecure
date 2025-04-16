import './Styles/App.css'
import {MusicToggle} from './components/MusicToggle.jsx'
import {GitButton} from './components/GitButton.jsx'
import { PassAuthenticator } from './components/PassAuthenticator.jsx';
import Background from "./media/background2.gif";
import { useState } from 'react';
import { HidePass } from './components/HidePass.jsx';
export function App(){

    var [hidePassword, sethidePassword] = useState(false)

    return(
        <div>
            <img src={Background} className='background'/>
            <header className='buttons-cnt'>
                <GitButton/>
                <MusicToggle/>
            </header>
           <div className='father-cnt'>
                <section className='title-cnt'> 
                    <h1 className='title'>PASSECURE</h1>
                </section>
                <section className='password-cnt'>
                    <PassAuthenticator 
                        hidePass={hidePassword}
                    />
                    <HidePass
                        sethidePass={sethidePassword}
                        hidePass={hidePassword}
                    />
                </section>
           </div>
        </div>
    )
}