import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Display } from "./components/Display";
import { Button } from "./components/Button";
import { DisplayWidthInputs } from "./components/DisplayWithInputs";



function App() {

    let [valueDisplay, setvalueDisplay] = useState<any>("Enter values and press 'set'")
    const [maxInputValue, setMaxInputValue] = useState<number>(0)
    const [startInputValue, setStartInputValue] = useState<number>(0)

    //--------- отправка значения в инпуты --------------// 
    //start inp
    const getStartInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        if (value < 0 || value >= maxInputValue) {
            setStartInputValue(value)
            setvalueDisplay("Incorrect value!")
        } else if (value >= 0) {
            setStartInputValue(value)
            setvalueDisplay("Enter values and press 'set'")
        }
    }
    //max inp
    const getMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const number = Number(e.currentTarget.value)
        setMaxInputValue(number)
    }

    //---------колбеки кнопок----------------------//

    const addClickStartInputValueToDisplay = () => {
        setvalueDisplay(startInputValue)
    }

    const increment = () => {
        setvalueDisplay(valueDisplay + 1)
    }
 
    return (
        <div className="App">

            <div className={"counter"}>
                <DisplayWidthInputs
                    maxInputValue={maxInputValue}
                    startInputValue={startInputValue}
                    getMaxInputValue={getMaxInputValue}
                    getStartInputValue={getStartInputValue}
                />
                <div className={"buttons_area"}>
                    <Button title={"set"}
                        click={addClickStartInputValueToDisplay}
                        num={startInputValue}
                        maxInputValue={maxInputValue}
                        startInputValue={startInputValue}
                    />
                </div>
            </div>

         
            <div className={"counter"}>
                <Display num={valueDisplay}
                    maxInputValue={maxInputValue}
                />
                <div className={"buttons_area"}>
                    <Button click={increment}
                        title={"inc"}
                        num={valueDisplay}
                        maxInputValue={maxInputValue}
                        valueDisplay={valueDisplay}
                        startInputValue={startInputValue} />
                    <Button title={"reset"}
                        click={() => setvalueDisplay(0)}
                        num={valueDisplay}
                        maxInputValue={maxInputValue}
                        valueDisplay={valueDisplay}
                        startInputValue={startInputValue} />
                </div>
            </div>


        </div>
    );
}

export default App;
