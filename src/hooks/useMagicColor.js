import { useEffect, useRef, useState } from 'react';


function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'blue'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }
    return COLOR_LIST[newIndex];
}

function useMagicColor() {


    const [color, setColor] = useState('black');
    const colorRef = useRef('black');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('Change color', colorRef.current);
            const newcolor = randomColor(colorRef.current);
            setColor(newcolor);
            colorRef.current = newcolor;
        }, 1000);
        // clean up interval on unmount
        return () => {
            clearInterval(colorInterval);
        };
    }, []);
    return color;
}

export default useMagicColor;