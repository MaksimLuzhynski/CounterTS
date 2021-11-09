import { ChangeEvent } from "react"

export type SetPropsType = {
    maxValue: number
    startValue: number
    message: string
    changeMaxValue: (newMaxValue: number) => void
    changeStartValue: (newStartValue: number) => void
    changeMessage: (errorValue: string) => void
    changeDisplayValue: (displayValue: number) => void
}

export function Set(props: SetPropsType) {


    if (props.startValue < 0 || props.maxValue < 0 || props.startValue >= props.maxValue) {
        props.changeMessage("ErrorMessage");
    }

    const setHandler = () => {
        localStorage.setItem("maxValue", JSON.stringify(props.maxValue));
        localStorage.setItem("startValue", JSON.stringify(props.startValue));
        props.changeDisplayValue(props.startValue);
        props.changeMessage("");
    };

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+event.currentTarget.value);
        props.changeMessage("Message")
    }

    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(event.currentTarget.valueAsNumber);
        props.changeMessage("Message");
    }

    return (
        <div className="Set">
            <div className="MaxStart">
                <div className="MaxValue">Max value:</div>
                <div className="StartValue">Start value:</div>
                {/*  ????????   Почему -1   ???????? */}
                <div className={props.maxValue > -1 && props.maxValue > props.startValue ? "InputMax" : "InputMaxtWarning"}>
                    <input
                        type="number"
                        value={props.maxValue}
                        onChange={onChangeMaxValueHandler}
                    />
                </div>
                <div className={props.startValue > -1 && props.startValue < props.maxValue ? "InputStart" : "InputStartWarning"}>
                    <input
                        type="number"
                        value={props.startValue}
                        onChange={onChangeStartValueHandler}
                    />
                </div>
            </div>
            <div className={props.message == "" || props.message == "ErrorMessage"
                ? "DisabledButtonSet"
                : "ButtonSet"}>
                <button
                    onClick={setHandler}
                    disabled={props.message == "" || props.message == "ErrorMessage"}
                >Set</button>
            </div>
        </div>
    )
}



// import { ChangeEvent, useState } from "react";
// import { DisplayMessageType } from "../../App";
// import { Button } from "../Button/Botton"
// import { Input } from "../Input/Input";

// export type SetPropsType = {
//     maxValue: number
//     startValue: number
//     displayValue: number
//     disabledButton: boolean
//     changeMaxValue: (newMaxValue: number) => void
//     changeStartValue: (newStartValue: number) => void
//     changeDisplayValue: (displayValue: number) => void
//     changeDisabledButton: (disabledButton: boolean) => void
//     changeDisplayMessage: (displayMessage: DisplayMessageType) => void
// }

// export function Set(props: SetPropsType) {

//     const setHandler = () => {
//         props.changeDisplayValue(props.startValue);
//         props.changeDisabledButton(true);
//         localStorage.setItem("maxValue", JSON.stringify(props.maxValue));
//         localStorage.setItem("startValue", JSON.stringify(props.startValue));
//         props.changeDisplayMessage("");
//     };

//     const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         props.changeMaxValue(+event.currentTarget.value);
//         props.changeDisabledButton(false);

//         // if (props.maxValue <= props.startValue) {
//         //     props.changeDisplayMessage("Ошибка")
//         // }
//         props.changeDisplayMessage("Введи");
//     }

//     const onChangeHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
//         props.changeStartValue(event.currentTarget.valueAsNumber);
//         props.changeDisabledButton(false);


//         // if (props.maxValue <= props.startValue) {
//         //     props.changeDisplayMessage("Ошибка")
//         // }
//         props.changeDisplayMessage("Введи");
//     }

//     // if(props.maxValue<=props.startValue){
//     //     props.changeDisplayMessage("Ошибка")
//     // }

//     return (
//         <div className="Set">
//             <div className="MaxStart">
//                 <div className="MaxValue">Max value:</div>
//                 <div className="StartValue">Start value:</div>
//                 <div className={props.maxValue > -1 && props.maxValue > props.startValue ? "InputMax" : "InputMaxtWarning"}>
//                     {/* <Input /> */}
//                     <input
//                         type="number"
//                         value={props.maxValue}
//                         onChange={onChangeHandler}
//                     />
//                 </div>
//                 <div className={props.startValue > -1 && props.startValue < props.maxValue ? "InputStart" : "InputStartWarning"}>
//                     {/* <Input /> */}
//                     <input
//                         type="number"
//                         value={props.startValue}
//                         onChange={onChangeHandler2}
//                     />
//                 </div>
//             </div>
//             <div className="ButtonSet">
//                 {/* <Button
//                     buttonName="Set"
//                     Handler={setHandler}
//                     value={props.value}
//                 /> */}
//                 <button
//                     // onClick={()=>{props.changeMaxValue(newValue)}}
//                     onClick={setHandler}
//                     disabled={props.disabledButton || props.startValue < 0 || props.maxValue <= 0 || props.startValue >= props.maxValue}
//                 >Set</button>
//             </div>
//         </div>
//     )
// }





