import { useEffect, useState } from 'react';


function formatDate(date) {
    if (!date) return '';
    // tránh trường hợp hiện 5:30:2
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);;
    const second = `0${date.getSeconds()}`.slice(-2);;

    return `${hours} : ${minutes}  : ${second}`;
}

function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        // setInterval(() => {
        const clockInterval = setInterval(() => {// khi dùng setInterval thì cần phải clear nó đi khi component unmount
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString)
        }, 1000);

        return () => {
            // cleanup
            clearInterval(clockInterval);
        }
    }, [])
    return { timeString }
}

export default useClock;