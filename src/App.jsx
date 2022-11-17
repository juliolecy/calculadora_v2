import React, { useState } from "react";
import * as k from "./styles";
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
} from "react-icons/ti";

const arrOperacoes = ["*", "/", "+", ".", "-"];

const handleNumber = () => {};

export default function App() {
    const [input, setInput] = useState(0);
    const [operation, setOperation] = useState();
    const [oldNum, setOldNum] = useState(0);

    const handleNumber = (e) => {
        let num = e.target.value;
        if (input === 0) {
            setInput(num);
        } else {
            setInput(input + num);
        }
    };

    const handleClear = () => {
        setInput(0);
    };

    const handleOperation = (e) => {
        const operator = e.target.value;
        setOperation(operator);
        setOldNum(input);
        setInput(0);
    };

    const handleCalc = () => {
        if (operation === "+") {
            setInput(parseFloat(oldNum) + parseFloat(input));
        } else if (operation === "-") {
            setInput(parseFloat(oldNum) - parseFloat(input));
        }
        if (operation === "*") {
            setInput(parseFloat(oldNum) * parseFloat(input));
        } else if (operation === "/") {
            setInput(parseFloat(oldNum) / parseFloat(input));
        }
    };

    return (
        <k.Container>
            <k.SocialMedia>
                <a href="https://www.linkedin.com/in/jlins" target="_blank">
                    <TiSocialLinkedinCircular />
                </a>
                <a href="https://github.com/juliolecy" target="_blank">
                    <TiSocialGithubCircular />
                </a>
            </k.SocialMedia>
            <k.Calculadora>
                <k.Input>{input}</k.Input>
                <k.Line>
                    <button onClick={handleNumber} value={7}>
                        7
                    </button>
                    <button onClick={handleNumber} value={8}>
                        8
                    </button>
                    <button onClick={handleNumber} value={9}>
                        9
                    </button>
                    <button
                        className="operator"
                        onClick={handleOperation}
                        value="/"
                    >
                        /
                    </button>
                </k.Line>
                <k.Line>
                    <button onClick={handleNumber} value={4}>
                        4
                    </button>
                    <button onClick={handleNumber} value={5}>
                        5
                    </button>
                    <button onClick={handleNumber} value={6}>
                        6
                    </button>
                    <button
                        className="operator"
                        onClick={handleOperation}
                        value="*"
                    >
                        *
                    </button>
                </k.Line>
                <k.Line>
                    <button onClick={handleNumber} value={1}>
                        1
                    </button>
                    <button onClick={handleNumber} value={2}>
                        2
                    </button>
                    <button onClick={handleNumber} value={3}>
                        3
                    </button>
                    <button
                        className="operator"
                        onClick={handleOperation}
                        value="+"
                    >
                        +
                    </button>
                </k.Line>
                <k.Line>
                    <button onClick={handleNumber} value={"."}>
                        .
                    </button>
                    <button onClick={handleNumber} value={0}>
                        0
                    </button>
                    <button onClick={handleClear}>C</button>
                    <button
                        className="operator"
                        onClick={handleOperation}
                        value="-"
                    >
                        -
                    </button>
                </k.Line>
                <k.Line>
                    <button className="equal" onClick={handleCalc}>
                        =
                    </button>
                </k.Line>
            </k.Calculadora>
        </k.Container>
    );
}
