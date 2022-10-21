import react from 'react';
import './clock.css';
import { useState } from 'react';
const Clock = () =>{

    let time  = new Date().toLocaleTimeString();  

    const [ctime,setTime] = useState(time);

    const changeTime = async () => {
        time = await new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(changeTime,1000);

    return <>
        <div id='clock-cointainer'>
            <h1 id='clock'>{ctime}</h1>
        </div>
    </>

}

export default Clock;