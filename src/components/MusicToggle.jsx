import { useState, useRef, useEffect } from "react";
import Play from "../media/Play.svg";
import Pause from "../media/Pause.svg";
import BGMusic from "../media/background-music.mp3";

export function MusicToggle(){
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(new Audio(BGMusic))
    
    useEffect(() => {
        audioRef.current.loop = true;
    }, []);

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
            title={isPlaying ? "Stop music" : "Play music"} 
            className="MusicToggleIcon"/>
        </button>
    )

}