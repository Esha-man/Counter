import React, {ChangeEvent, useState} from 'react';

import './App.css';
import {Display} from "./components/Display";

import {Button} from "./components/Button";
import {DisplayInterface} from "./components/DisplayInterface";
import {Button2} from "./components/Button2";

function App() {

    const [num, setNum] = useState<number>(0)
    const [maxInputValue, setMaxInputValue] = useState<number>(0)

    const numPlus = () => {

        if (num < maxInputValue) {
            setNum(num + 1)
        } else {
            return
        }
    }

    const getMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const number = Number(e.currentTarget.value)
        setMaxInputValue(number)
    }


//---------отправка значения из Start value в дисплей по клику------//
    const [startVal, setStartVal] = useState<number>(0)

    const setStartValue = () => {
        setNum(startVal)
    }

    const getStartInputValue = (e: ChangeEvent<HTMLInputElement>)=>{
       const number = Number(e.currentTarget.value)
        setStartVal(number)

    }
//---------отправка значения из Start value в дисплей по клику-- КОНЕЦ----//
    return (
        <div className="App">

            <div className={"counter"}>
                {/*<DisplayInterface/>*/}

                        <div className={"display"}>

                            <div>
                        <span className={"inputSpan"}>Max value:
                            <input type={"number"}
                                   className={"inputs"}
                                   onChange={getMaxInputValue}
                                   /></span>

                                <span className={"inputSpan"}>Start value:
                            <input type={"number"}
                                   className={"inputs"}
                                   onChange={getStartInputValue}

                            /></span>
                            </div>

                        </div>

                <div className={"buttons_area"}>
                    <button onClick={setStartValue}>set</button>

                    {/*<Button2 title={"set"} />*/}
                </div>
            </div>

{/*///---------------------------------------------////////////////////////--------------------//*/}
            <div className={"counter"}>

                <Display num={num} maxInputValue={maxInputValue}/>

                <div className={"buttons_area"}>
                    <Button title={"inc"} click={numPlus} num={num} maxInputValue={maxInputValue}/>
                    <Button title={"reset"} click={() => setNum(0)} num={num} maxInputValue={maxInputValue}/>
                </div>

                {/* <Buttons numPlus={numPlus} setNum={setNum} num={num}/>*/}
            </div>


        </div>
    );
}

export default App;
