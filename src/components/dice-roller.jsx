import React, { useState, useEffect } from 'react';
import D4 from '../assets/dice-images/d4.png';
import D6 from '../assets/dice-images/d6.png';
import D8 from '../assets/dice-images/d8.png';
import D10 from '../assets/dice-images/d10.png';
import D12 from '../assets/dice-images/d12.png';
import D20 from '../assets/dice-images/d20.png';
export const DiceRoller = () => {

    const [rollState, setRollState] = useState(0);

    const [nameState, setNameState] = useState("Jong");

    const rollD4 = () => {
        const result = (Math.floor(Math.random() * 4) + 1);

        setRollState(result);
    };

    const rollD6 = () => {
        const result = (Math.floor(Math.random() * 6) + 1);

        setRollState(result);
    };

    const rollD8 = () => {
        const result = (Math.floor(Math.random() * 8) + 1);

        setRollState(result);
    };

    const rollD10 = () => {
        const result = (Math.floor(Math.random() * 10) + 1);

        setRollState(result);
    };

    const rollD12 = () => {
        const result = (Math.floor(Math.random() * 12) + 1);

        setRollState(result);
    };

    const rollD20 = () => {
        const result = (Math.floor(Math.random() * 20) + 1);

        setRollState(result);
    };

    const changeName = (name) => {
        setNameState(name);
    }



    return (
        <div className='dice'>
            <div className='dice-result'>
                {nameState}
                {rollState}
            </div>
            <div className='dice-container'>
                <button className='btn' onClick={() => rollD4()}>
                    <img className='dice-img' src={D4} />
                </button>
                <button className='btn' onClick={() => rollD6()}>
                    <img className='dice-img' src={D6} />
                </button>
                <button className='btn' onClick={() => rollD8()}>
                    <img className='dice-img' src={D8} />
                </button>
                <button className='btn' onClick={() => rollD10()}>
                    <img className='dice-img' src={D10} />
                </button>
                <button className='btn' onClick={() => rollD12()}>
                    <img className='dice-img' src={D12} />
                </button>
                <button className='btn' onClick={() => rollD20()}>
                    <img className='dice-img' src={D20} />
                </button>
                <button className='btn' onClick={() => changeName("Desu")}>
                    Button
                </button>
            </div>
        </div>
    )
}

