import React, { ChangeEvent } from "react";

type DisplayType = {
    maxInputValue: number
    startInputValue: number
    getMaxInputValue: (e: ChangeEvent<HTMLInputElement>) => void
    getStartInputValue: (e: ChangeEvent<HTMLInputElement>) => void

}


export const DisplayWidthInputs = (props: DisplayType) => {

    const errorStyle = () => {
        if (props.startInputValue >= props.maxInputValue || props.startInputValue < 0) {
            return { borderColor: "red", backgroundColor: "red" }
        }
    }

    return (
        <div className={"display"}>
            <div>
                <span className={"inputSpan"}>Max value:
                    <input type={"number"}
                        className={"inputs"}
                        style={errorStyle()}
                        onChange={props.getMaxInputValue}
                        value={props.maxInputValue}
                    /></span>

                <span className={"inputSpan"}>Start value:
                    <input type={"number"}
                        className={"inputs"}
                        style={errorStyle()}
                        onChange={props.getStartInputValue}
                        value={props.startInputValue}
                    /></span>
            </div>

        </div>

    )


}