import './Styles/App.css'
import {MusicToggle} from './MusicToggle.jsx'
import Background from "./media/background2.gif";
export function App(){
    return(
        <div>
            <img src={Background} className='background'/>
            <section className='principal-menu'>
                <header className='title-cnt'>
                <h1 className='title'>PASSECURE</h1>
                <MusicToggle/>
                </header>
                <section>
                    
                </section>
            </section>
        </div>
    )
}