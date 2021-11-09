export type DisplayPropsType = {
    maxValue: number
    startValue: number
    displayValue: number
    message: string
    incValue: (value: number) => void
    resetValue: () => void
}

export function Display(props: DisplayPropsType) {

    const incHandler = () => {
        props.incValue(props.startValue);

    };
    const resetHandler = () => {
        props.resetValue();
    };


    let Display
    if (props.message === "ErrorMessage") {
        Display = "Incorrect value!";

    } else if (props.message === "Message") {
        Display = "Enter correct values and press 'Set'.";

    } else {
        Display = props.displayValue;
    }


    return (
        <div className="Display">

            {props.message == "ErrorMessage" && <div className={"DisplayMessageError"}>{Display}</div>}
            {props.message == "Message" && <div className={"DisplayMessage"}>{Display}</div>}
            {(props.message !== "Message" && props.message !== "ErrorMessage") && <div className={props.displayValue == props.maxValue
                ? "DisplayValueMax"
                : "DisplayValue"}>{Display}</div>}

            <div className="Buttons">
                <div className={props.message === "ErrorMessage" || props.message === "Message" || props.displayValue == props.maxValue
                    ? "IncDisabled"
                    : "Inc"}>
                    <button
                        onClick={incHandler}
                        disabled={props.message === "ErrorMessage" || props.message === "Message" || props.displayValue == props.maxValue}
                    >Inc</button>
                </div>
                <div className={props.message === "ErrorMessage" || props.message === "Message" || props.displayValue == props.startValue
                    ? "ResetDisabled"
                    : "Reset"}>
                    <button
                        disabled={props.message === "ErrorMessage" || props.message === "Message" || props.displayValue == props.startValue}
                        onClick={resetHandler}
                    >Reset</button>
                </div>
            </div>
        </div>)
}
