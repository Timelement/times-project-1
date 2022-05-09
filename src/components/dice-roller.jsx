import React, { useState, useEffect } from 'react';
import D4 from '../assets/dice-images/d4.png';
import D6 from '../assets/dice-images/d6.png';
import D8 from '../assets/dice-images/d8.png';
import D10 from '../assets/dice-images/d10.png';
import D12 from '../assets/dice-images/d12.png';
import D20 from '../assets/dice-images/d20.png';
export const DiceRoller = () => {

    const [rollState, setRollState] = useState(0);

    const [critState, setCritState] = useState('');

    const [nameState, setNameState] = useState('');

    const rollDice = (number) => {
        const result = (Math.floor(Math.random() * number) + 1);
        critCheck(result, number);
        setRollState(result);
    };

    const critCheck = (roll, max) => {
        if (roll === 1) {
            setCritState("CRITICAL FAILURE");
        } else if (roll === max) {
            setCritState("CRITICAL SUCCESS!!");
        } else {
            setCritState('');
        }
    };

    const diceHidden = () => {
        let diceDiv = document.getElementById('dice-hidden');
        if (diceDiv.style.display === "none") {
            diceDiv.style.display = "block";
          } else {
            diceDiv.style.display = "none";
          }

    };

    return (
        <div className='dice'>
            <button className='btn dice-display' onClick={() => diceHidden()}>Roll some Dice?</button>
            <div id='dice-hidden'>
                <div className='dice-result'>
                    <h1 className='roll-result'>{rollState}</h1>
                    <h1 className='dice-crit'>{critState}</h1>
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
        </div>
    )
}

