import React, { useState, useEffect } from "react";




export const Promises = () => {


    const [newActivity, setActivity] = useState('');


    const fetchActivity = async() => {
        const url = 'https://www.boredapi.com/api/activity';
        await fetch(url).then(response => response.json()).then(data => {
          console.log(data);
          const { activity } = data;
          console.log(activity);
          setActivity(activity);
        });
      }


      return (
        <div className="promise-component-container">
        <button className='btn' onClick={() => fetchActivity()}>
          <h3>I'm bored. Give me something to do.</h3>
        </button>
        <div className='promise-response-container'>
        { newActivity }
        </div>
      </div>
      )


}