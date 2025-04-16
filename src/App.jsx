import './Styles/App.css'
import {MusicToggle} from './MusicToggle.jsx'
import {GitButton} from './GitButton.jsx'
import {SelectButton} from './SelectButton.jsx'
import Background from "./media/background2.gif";
export function App(){
    return(
        <div>
            <img src={Background} className='background'/>
            <section className='principal-menu'>
                <header className='title-cnt'>
                    <GitButton/>
                    <h1 className='title'>PASSECURE</h1>
                    <MusicToggle/>
                </header>
                <section className='select-cnt'>
                    <SelectButton title={"Generate password"}/>
                    <SelectButton title={"Authentication"}/>
                </section>
            </section>
        </div>
    )
}