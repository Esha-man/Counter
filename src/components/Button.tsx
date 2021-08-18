import React from "react";

type OneButtonType = {
    title: string
    click: () => void
    num: number
    maxInputValue: number
}


export const Button = (props: OneButtonType) => {

       const incDis: boolean = props.num > props.maxInputValue ? true : false


    const resetDis = props.num === 0 ? true : false

    return (

        <button disabled={props.title === "inc" ? incDis : resetDis} onClick={props.click}>{props.title}</button>

    )
}