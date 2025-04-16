import { useState, useRef } from "react";
import Play from "./media/Play.svg";
import Pause from "./media/Pause.svg";
import BGMusic from "./media/background-music.mp3";

export function MusicToggle(){
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(new Audio(BGMusic))
    const toggleMusicState = () => {
        const audio = audioRef.current
        if (isPlaying){
            audio.pause()
        } else {
            audio.play()
        }
        setIsPlaying(!isPlaying);
    }
    

    return (
        <button onClick={toggleMusicState} className="MusicToggle">
            <img 
            src={isPlaying ? Play : Pause} 
            alt={isPlaying ? "Play music" : "No music"} 
            className="MusicToggleIcon"/>
        </button>
    )

}