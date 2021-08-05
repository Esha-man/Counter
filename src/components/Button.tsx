import React from "react";

type OneButtonType = {
    title: string
    click: () => void
    num: number
}




export const Button = (props: OneButtonType) => {

    let incDis = props.num > 4 ? true : false
    let resetDis = props.num === 0 ? true : false

    return (

        <button disabled={props.title === "inc" ? incDis : resetDis} onClick={props.click}>{props.title}</button>

    )
}