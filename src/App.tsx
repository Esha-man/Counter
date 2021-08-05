import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./components/Display";
import {Buttons} from "./components/Buttons";
import {Button} from "./components/Button";

function App() {

    const [num, setNum] = useState<number>(0)

    const numPlus = () => {

        if (num < 5) {
            setNum(num + 1)
        } else {
            return
        }
    }


    return (
        <div className="App">
            <div className={"counter"}>

                <Display num={num}/>

                <div className={"buttons"}>
                    <Button title={"inc"} click={numPlus} num={num}/>
                    <Button title={"reset"} click={() => setNum(0)} num={num}/>
                </div>

                {/* <Buttons numPlus={numPlus} setNum={setNum} num={num}/>*/}
            </div>
        </div>
    );
}

export default App;
