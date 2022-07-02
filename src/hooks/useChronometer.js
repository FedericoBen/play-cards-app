import { useEffect, useState } from "react";

export const useChronometer = () => {

    const [seconds, setSeconds] = useState(0);

    const [isActive, activeChronometer] = useState(false);

    const [secondsString, setCorrectTimerNumStri] = useState(`0 min  : 0 seg`);

    const restart = () =>{
        setSeconds(0)
    }

    const correctTimer = (seconds) => {

        let seg = 0;
        let min = 0;
        if (seconds / 60 > 1) {
    
    
          if ((seconds % 60) != 0) {
    
            min = Math.trunc(seconds / 60);
    
            seg = seconds - min * 60;
    
            setCorrectTimerNumStri(`${min} min  : ${seg} seg`);
    
          } else {
            min = seconds / 60
            seg = 0;
            setCorrectTimerNumStri(`${min} min  : ${seg} seg`);
          }
    
        } else {
            setCorrectTimerNumStri(`${min} min  : ${seconds} seg`);
        }
    
      }


    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                correctTimer(seconds);
            }, 900);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return [
        activeChronometer,
        restart,
        secondsString
    ]
    
}
