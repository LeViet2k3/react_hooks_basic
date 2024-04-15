import React, { useEffect, useState } from 'react';

Clock.propTypes = {};

function formatDate(date) {
    if (!date) return '';
    // tránh trường hợp hiện 5:30:2
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);;
    const second = `0${date.getSeconds()}`.slice(-2);;

    return `${hours} : ${minutes}  : ${second}`;
}

function Clock() {
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
    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

export default Clock;