// import React, {useState, useEffect} from 'react';
// import './assets/scss/App.scss'
// import Clock from './Clock';

// export default function App() {
//     const [time, setTime] = useState(__getCurrentTime());

//     function __getCurrentTime() {
//         const now = new Date();
//         return {
//             hours: now.getHours(),
//             minutes: now.getMinutes(),
//             seconds: now.getSeconds(),
//             tick: time ? time.tick + 1 : 0
//         };
//     } 

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setTime(__getCurrentTime());
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, [time]);

//     if (time.tick % 10 === 0) {
//         return null;
//     }

//     return (
//         <Clock
//             title={`ex05: Clock Component II: ${time.tick}`}
//             hours={time.hours}
//             minutes={time.minutes}
//             seconds={time.seconds} />
//     );
// }

import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentTime = function() {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        };
    } 

    const [currentTIme, setCurrentTime] = useState(getCurrentTime());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
            setTicks(x => x+1);   //상태 변경 함수 호출
        }, 1000);

        // 클로저 활용
        return () => {
            clearInterval(intervalId);
        }; 
    }, []);

    return (
        <Clock
            title={`ex05: Clock Component II: ${ticks}`}
            hours={currentTIme.hours}
            minutes={currentTIme.minutes}
            seconds={currentTIme.seconds} />
    );
}