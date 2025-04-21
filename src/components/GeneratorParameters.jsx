export function GeneratorParameters(props){

    return(
        <span className="parameters">
            <section className="validchar-cnt">
                <div className="charcheck">
                    <input type="checkbox" 
                        checked={props.checkUpper} 
                        onChange={(e) => props.setcheckUpper(e.target.checked)}/>
                    <label>Upper Cases</label>
                </div>
                <div className="charcheck">
                    <input type="checkbox"
                        checked={props.checkSymbol} 
                        onChange={(e) => props.setcheckSymbol(e.target.checked)}/>
                    <label>Symbols</label>
                </div>
                <div className="charcheck">
                    <input type="checkbox"
                        checked={props.checkLower} 
                        onChange={(e) => props.setcheckLower(e.target.checked)}/>
                    <label>Lower Cases</label>
                </div>
                <div className="charcheck">
                    <input type="checkbox"
                        checked={props.checkNumber} 
                        onChange={(e) => props.setcheckNumber(e.target.checked)}/>
                    <label>Numbers</label>
                </div>  
            </section>
            <section className="text-cnt">
                <label>Length</label>
                <input  
                type="number" 
                className="passlength" 
                max={25} min={8}
                onChange={(e) => props.setPassLength(e.target.value)}/>
            </section>
        </span>
    )
}