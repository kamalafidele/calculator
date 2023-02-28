import React, { useState } from "react";

const Calculator = () => {
    const [calculation, setCalculation] = useState('');

    const actions = ['/', '*', '+', '-', '.'];
    const updateCalculation = (value) => {

        if (
            actions.includes(value) & (calculation === '') ||
            actions.includes(value) & actions.includes(calculation.slice(-1))
        ) {
            return;
        }
        setCalculation(calculation + value);
    };

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalculation(i.toString())} key={i}>
                    {i}
                </button>
            );
        }
        return digits;
    };

    const calculate = () => {
        setCalculation(eval(calculation).toString());
    };

    const clear = () => {
        if (calculation === '') {
            return;
        }

        const value = calculation.slice(0, -1);
        setCalculation(value);
    };

    return (
        <>
            <div>
                <div className="header">
                    <h1> Calculator</h1>
                </div>

                <div className='calc-grid'>
                    <div className='output'>
                        {calculation || '0'}
                    </div>

                    <div className="symbols">
                        <div className='ops'>
                            <button onClick={() => { updateCalculation('/'); }}>/</button>
                            <button onClick={() => { updateCalculation('*'); }}>*</button>
                            <button onClick={() => { updateCalculation('+'); }}>+</button>
                            <button onClick={() => { updateCalculation('-'); }}>-</button>
                            <button onClick={clear}>
                                {' '}
                                <img width={40} height={40} src='https://cdn-icons-png.flaticon.com/512/159/159805.png' alt='' />
                            </button>
                        </div>
                        <div className='dig'>
                            {createDigits()}

                            <button
                                onClick={() => {
                                    updateCalculation('.');
                                }}
                            >
                                .
                            </button>
                            <button
                                onClick={() => {
                                    updateCalculation('0');
                                }}
                            >
                                0
                            </button>
                            <button onClick={calculate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;