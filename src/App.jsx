import './Styles/App.css'
import {MusicToggle} from './components/MusicToggle.jsx'
import {GitButton} from './components/GitButton.jsx'
import {SelectButton} from './components/SelectButton.jsx'
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