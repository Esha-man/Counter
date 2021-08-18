import React from "react";

type DisplayType = {
    num: number
    maxInputValue: number
}



export const Display = (props: DisplayType) => {
  const displayValue = ()=> {
      if (props.num) {
        return  props.num
      } else {
       return   "incorrect value!!!!!1"
      }
  }
    return (
        <div className={"display"}>
            <div className={props.num === props.maxInputValue ? "red" : "white"}>
                {displayValue()}

            </div>
        </div>

    )
}