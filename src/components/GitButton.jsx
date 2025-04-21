import Git from "../media/Git.svg";


export function GitButton(){
    const goTo = () => {
        window.open('https://github.com/MaguRomera', '_blank');
    };
    return (
        <button onClick={goTo} className="GitButton">
            <img 
            src={Git} 
            className="GitButtonIcon"
            title="Meet THE CREATOR"/>
        </button>
    )

}