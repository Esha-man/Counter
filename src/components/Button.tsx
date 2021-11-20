import React from "react";

type OneButtonType = {
    title: string
    click: () => void
    num: number
    maxInputValue: number
    valueDisplay?: string
    startInputValue: number
    
}


export const Button = (props: OneButtonType) => {

    let incDis: boolean = props.num >= props.maxInputValue || props.num < 0 ? true : false

    const resetDis = props.num === 0 ? true : false

    let setDis = props.num >= props.maxInputValue || props.num < 0 ? true : false


    const disabledButton = () => {
       
        if (props.startInputValue >= props.maxInputValue) return true
        if (props.startInputValue < 0) return true
        if (props.valueDisplay === "Enter values and press 'set'") return true
        
      if (props.title === "inc") {
         return incDis
      } else if (props.title === "reset") {
          return resetDis
      } else if (props.title === "set") {
          return setDis
        }
    
    }
    
    return (

        // <button disabled={props.title === "inc" ? incDis : resetDis} onClick={props.click}>{props.title}</button>
        <button  disabled={disabledButton()} onClick={props.click}>{props.title}</button>

    )
}