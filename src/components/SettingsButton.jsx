import settings from "../media/settings.svg";

export function Settings(props){
    
    const handleSettings = () => {
        props.setIsHidden(!(props.isHidden))
    }   

    return (
        <button 
            onClick={handleSettings}
            className="SettingsButton">
            <img 
            src={settings} 
            className="SettingsButtonIcon"
            title="Generator parameters"/>
        </button>
    )

}