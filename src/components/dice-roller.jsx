import React, { useState, useEffect } from 'react';
import D4 from '../assets/dice-images/d4.png';
import D6 from '../assets/dice-images/d6.png';
import D8 from '../assets/dice-images/d8.png';
import D10 from '../assets/dice-images/d10.png';
import D12 from '../assets/dice-images/d12.png';
import D20 from '../assets/dice-images/d20.png';
export const DiceRoller = () => {

    const [rollState, setRollState] = useState(0);

    const rollDice = (number) => {
        const result = (Math.floor(Math.random() * number) + 1);

        setRollState(result);
    };



    return (
        <div className='dice'>
            <div className='dice-result'>
                {rollState}
            </div>
            <div className='dice-container'>
                <button className='btn' onClick={() => rollDice(4)}>
                    <img className='dice-img' src={D4} />
                </button>
                <button className='btn' onClick={() => rollDice(6)}>
                    <img className='dice-img' src={D6} />
                </button>
                <button className='btn' onClick={() => rollDice(8)}>
                    <img className='dice-img' src={D8} />
                </button>
                <button className='btn' onClick={() => rollDice(10)}>
                    <img className='dice-img' src={D10} />
                </button>
                <button className='btn' onClick={() => rollDice(12)}>
                    <img className='dice-img' src={D12} />
                </button>
                <button className='btn' onClick={() => rollDice(20)}>
                    <img className='dice-img' src={D20} />
                </button>
            </div>
        </div>
    )
}

