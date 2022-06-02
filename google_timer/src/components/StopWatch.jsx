import React, { useEffect, useState } from 'react'

export const StopWatch = () => {
    const[stopwatch,setStopwatch] = useState(0);
    const[watchid,setWatchid] = useState(null);
    const startWatch = ()=>{
        if(!watchid){
            let id = setInterval(()=>{
                setStopwatch((prev)=>prev+1);
            },1000);
            setWatchid(id);
        }
        
    }
    const resetWatch = ()=>{
        clearInterval(watchid);
        setStopwatch(0);
        setWatchid(null);
    }
    function convertHMS(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours   = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
        let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
    }
  return (
    <div>
        <h1>Stopwatch</h1>
        <h1>{convertHMS(stopwatch)}</h1>
        <button onClick={startWatch}>Start</button>
        <button onClick={resetWatch}>Reset</button>
    </div>
  )
}
