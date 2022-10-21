import React, {Component} from 'react';
import sound from "./alarmAudio.mp3";
import './Alarm.css'
const Alarm = () => {
    function ringAlarm() {
        var timeValue = prompt("Enter number of Seconds")
        if(isNaN(timeValue)) {
            alert("Please enter a number");
        }
        else{ setTimeout(() => {
            const audioElment = document.getElementsByClassName("audioSection")[0]
            audioElment.play()
        }, timeValue*1000);
    }
      }
    function stopAlarm() {
      const audioElment = document.getElementsByClassName("audioSection")[0]
      audioElment.pause()
    }
    const snooseAlarm = () => {
        const audioElment = document.getElementsByClassName("audioSection")[0]
        audioElment.pause()
        setTimeout(() => {
            const audioElment = document.getElementsByClassName("audioSection")[0]
            audioElment.play()
        }, 5000);
    }
    return <>
        <div className="btnContainer">
        <button className="btn" onClick={ringAlarm}>Set Alarm</button>
        <button className="btn" onClick={stopAlarm}>Stop Alarm</button>
        <button className="btn" onClick={snooseAlarm}>Snoose Alarm</button>
        </div>

        <audio className="audioSection">
        <source src={sound} />
        </audio>
    </>
}

export default Alarm;