import React, { useState, useEffect } from "react";
import './TEmporizadorGalleryStyle.css'
export default function TemporizadorGallery() {
  const [time, setTime] = useState("");

  useEffect(() => {
    let temporizador = new Date("Jun 9,2023 23:00:00").getTime(); //sacmos el tiempo al que queremos llegar
    let actualTime = setInterval(() => {
      // sacamos el tiempo actual
      let newTime = new Date().getTime();

      let distance = temporizador - newTime;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24)); //vamos haciendo calculos para q nos de un redondeado de dias,horas,minutos y segundos
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime( {dias:"dias: "+days , horas:"horas: " +hours , min: "minutos: " + minutes , seg: "segundos: " +seconds });

      if(distance<0){
        clearInterval(actualTime); // hacemos un if para que pare el contador
        setTime('Happy birday ')
      }
    }, 1000); // a intervalos de un segundo
  }, []);

  return (
    <div className="div-dad">
    <h2 className="title-t">Temporizador</h2>
    <div className="div-t">
      <spam className='temporizador-r'>{time.dias}</spam>
      <spam className='temporizador'>{time.horas}</spam>
      <spam className='temporizador-y'>{time.min}</spam>
      <spam className='temporizador'>{time.seg}</spam>
      </div>
      <h3 className="happy-birday">lo que falta pa mis 26 primaveras XD</h3>
    </div>
  );
}
