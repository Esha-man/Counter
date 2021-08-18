import React from "react";
import {Button} from "./Button";

type DisplayInterfaceType = {
    // value: number
}

export const DisplayInterface = (props: DisplayInterfaceType) => {


    const setValueToDisplay = () => {
      
    }

    return (
        <div className={"display"}>

            <div>
                <span className={"inputSpan"}>Max value:   
                    <input type={"number"} 
                           className={"inputs"} 
                           value={5}/></span>
                
                <span className={"inputSpan"}>Start value: 
                    <input type={"number"} 
                           className={"inputs"}
                           value={3}/></span>
            </div>

            {/*<div className={"buttons_area"}>*/}
            {/*    <Button title={"set"} num={0}/>*/}
            {/*</div>*/}

        </div>
    )
}