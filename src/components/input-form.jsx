import React, { useState, useEffect} from 'react'




export const InputForm = () => {

    const [userName, setUserName] = useState({
        name: '',
    });

    const [displayState, setDisplayState] = useState('');

    const handleChange = (event) => {
        setUserName({...userName, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayState(userName.name);
        // setUserName({name:''})

        // let userNameDiv = document.getElementById('user-name-hidden')
        // if (userNameDiv.style.display === "none") {
        //     userNameDiv.style.display = "block";
        //     console.log('time');
        // } else {
        //     userNameDiv.style.display = "none";
        //     console.log('jong');
        // }
    };

    // const debounceEvent = (callback, time) => {
    //     let interval;
    //     return (...args) => {
    //         clearTimeout(interval);
    //         interval = setTimeout(() => {
    //             interval = null;
    //             callback(...args);
    //         }; time);
    //     };
    // };


    return (
        <div className='input-form'>
                
                    
                        <h3>Name:</h3>
                        <input type='text' name='name' value={userName.name} onChange={handleChange}/>
                    
                    <input type='submit' value='Submit' onClick={(event) => handleSubmit(event)}/>

                    <div className='userNameDisplay'>{displayState}</div>
            </div>
    )

};