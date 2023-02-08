import React, { useEffect, useState } from "react";
import './RelogStyle.css'
export default function RelogGallery(){
const [clockState,setClockState]=useState()
    useEffect(()=>{
    setInterval(()=>{
        const date= new Date();
        setClockState(date.toLocaleTimeString());
    },1000)
},[])

return(<div  className="div-relog">
<div className="div-fecha">
<h2 className="time-relog-numbers">Feb</h2>
<h2 className="time-relog-numbers">{clockState}</h2>
<h2 className="time-relog-numbers">2023</h2>

</div>
</div>)
}