import React, { useState, useEffect } from "react";
import './CronometroGalleryStyle.css'
export default function CronometroGallery(){
 const [time, setTime] = useState(0);
 const [timerOn, setTimerOn] = useState(false);

 useEffect(()=>{
    let interval =null;
    if(timerOn){
        interval = setInterval(()=>{
            setTime((prevTime)=> prevTime + 10)
        },10)
    }else{
        clearInterval(interval)
    }
    return ()=> clearInterval(interval)
 },[timerOn])
//  let minutos=(0 + Math.floor((time/60000)% 60)).slice(-2)
//  let segundos=(0 + Math.floor((time/1000)% 60)).slice(-2)
//  let milisegundos=(0 + ((time/10)% 100)).slice(-2)
return (
    <div className="div-padre">
    <h2 className="tittle"> Cronometro</h2>
    {/* <h2>{time}</h2> */}
    <div className="div-cronometro">
    <spam className='numbers-r'>{('0' + Math.floor((time/60000)% 60)).slice(-2)}</spam>
    <spam className='numbers-y'>{('0' + Math.floor((time/1000)% 60)).slice(-2)}</spam>
    <spam className='numbers'>{('0' + ((time/10)% 100)).slice(-2)}</spam>
    </div>
    <div className="div-bton">
        <button className="bton-comand-r" onClick={()=>setTimerOn(true)}>Start</button>
        <button className="bton-comand" onClick={()=>setTimerOn(false)}>Stop</button>
        <button className="bton-comand-y" onClick={()=>setTimerOn(true)}>Resume</button>
        <button className="bton-comand" onClick={()=>setTime(0)}>Reset</button>
    </div>
    </div>
)

}