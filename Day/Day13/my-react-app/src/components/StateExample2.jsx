import { useState } from "react";
function ToggleText() {
    const [showText,setShowText] = useState(true);

    return(
        <div>
            <h2>Toggle Text</h2>

            <button onClick={()=>setShowText(!showText)}>{showText ? "Hide" : "Show"}</button>

            {showText && <p>Hello all its my pleasure to welcome you all in this page</p>}
        </div>
    );
}
export default ToggleText;