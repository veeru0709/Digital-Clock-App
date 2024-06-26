import react,{useCallback, useState, useEffect} from 'react';
function DigitalClock() {
    const [time, setTime]=useState(new Date());
    useEffect(()=>{
        const intervalID= setInterval(()=>{
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(intervalID);
        }
    },[]);
    function formatTime(){
        let hours = time.getHours();
        const minute = time.getMinutes();
        const seconds =time.getSeconds();
        const meridem=hours>=12?"PM":"AM";
        hours=hours%12 || 12;
        return `${padzero(hours)}:${padzero(minute)}:${padzero(seconds)}:${padzero(meridem)}`
     }
     function padzero(number){
        return (number < 10 ? "0":"") + number;
     }
    
    return(<div className='clock-container'>
        <div className='clock'>
            <span>
                {formatTime()}
            </span>
        </div>
    </div>)
}
export default DigitalClock;