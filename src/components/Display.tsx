import React from "react";

type DisplayType = {
    num: number | "Incorrect value!"
    maxInputValue: number

}



export const Display = (props: DisplayType) => {

    return (
        <div className={"display"}>
            <div className={(props.num === props.maxInputValue || props.num === "Incorrect value!") ? "red" : "aliceblue"}>
                {props.num}

            </div>
        </div>

    )
}