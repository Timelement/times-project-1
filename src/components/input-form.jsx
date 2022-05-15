import React, { useState, useEffect} from 'react'




export const InputForm = () => {

    const [userName, setUserName] = useState({
        name: '',
    });

    const handleChange = (event) => {
        setUserName({...userName, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userName);
        setUserName({name:''})
    };



    return (
        <div className='input-form'>
                
                    
                        <h3>Name:</h3>
                        <input type='text' name='name' value={userName.name}/>
                    
                    <input type='submit' value='Submit' onClick={() => handleSubmit()}/>
            
            </div>
    )

};