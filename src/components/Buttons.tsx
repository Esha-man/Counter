import React from "react";

type ButtonsType = {
    numPlus: () => void
    setNum: (num: number) => void
    num: number
}



export const Buttons = (props: ButtonsType) => {
    let disPlus = props.num > 4 ? true : false
    let disSet = props.num === 0 ? true : false
    return (
        <div className={"buttons"}>

            <button disabled={disPlus} onClick={props.numPlus} className={"inc"}>inc</button>
            <button disabled={disSet} onClick={()=> props.setNum(0)} className={"reset"}>reset</button>

        </div>
    )
}