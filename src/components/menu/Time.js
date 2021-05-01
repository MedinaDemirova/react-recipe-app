import { useEffect, useState } from "react";

function Time() {

    let time = new Date().toLocaleTimeString('en-GB');
 
    let [currentTime, setCurrentTime] = useState(time);

    useEffect(() => { setInterval(() => updateTimeState(), 1000) }, []);

    function updateTimeState() {
      
        setCurrentTime(new Date().toLocaleTimeString('en-GB'));
    }

    return (
        <div className="time-component">{currentTime}</div>
    )
}

export default Time;