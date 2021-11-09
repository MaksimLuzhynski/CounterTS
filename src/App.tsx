import { useState } from 'react';
import './App.css';
import { Display } from "./components/Display/Display";
import { Set } from './components/Set/Set';

function App() {


    let storageMaxValue = localStorage.getItem("maxValue")
    let newStorageMaxValue: number = 0
    if (storageMaxValue) {
        newStorageMaxValue = JSON.parse(storageMaxValue);
    }

    let storageStartValue = localStorage.getItem("startValue")
    let newStorageStartValue: number = 0
    if (storageStartValue) {
        newStorageStartValue = JSON.parse(storageStartValue);
    }


    let [maxValue, setMaxValue] = useState<number>(newStorageMaxValue)
    let [startValue, setStartValue] = useState<number>(newStorageStartValue)
    let [displayValue, setDisplayValue] = useState<number>(startValue)
    let [message, setMessage] = useState<string>("")


    function changeMaxValue(newMaxValue: number) {
        setMaxValue(newMaxValue);
    }
    function changeStartValue(newStartValue: number) {
        setStartValue(newStartValue);
    }
    function changeMessage(message: string) {
        setMessage(message);
    }
    function changeDisplayValue(displayValue: number) {
        setDisplayValue(displayValue);
    }
    function resetValue() {
        setDisplayValue(startValue);
    }
    function incValue() {
        if (displayValue < maxValue) {
            displayValue = displayValue + 1;
            setDisplayValue(displayValue);
        }
    }


    return (
        <div className="App">
            <div className="Counter">
                <Display
                    maxValue={maxValue}
                    startValue={startValue}
                    displayValue={displayValue}
                    message={message}
                    incValue={incValue}
                    resetValue={resetValue}
                />
                <Set
                    maxValue={maxValue}
                    startValue={startValue}
                    message={message}
                    changeMaxValue={changeMaxValue}
                    changeStartValue={changeStartValue}
                    changeDisplayValue={changeDisplayValue}
                    changeMessage={changeMessage}
                />
            </div>
        </div>
    )
}

export default App;
