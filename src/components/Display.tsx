import React from "react";

type DisplayType = {
    num: number
}



export const Display = (props: DisplayType) => {
    return (
        <div className={"display"}>
            <div className={props.num === 5 ? "red" : "white"}>
                {props.num}
            </div>
        </div>

    )
}