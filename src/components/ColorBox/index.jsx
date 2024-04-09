import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
    const colorList = ['deeppink', 'red', 'green', 'yellow'];
    const randomIndex = Math.trunc(Math.random() * 4);
    return colorList[randomIndex];
}



function ColorBox() {
    // biến useState thành dạng callback function nó chỉ chạy 1 lần thôi
    const [colors, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'blue';//
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);// dùng để lưu màu đã thay đổi khi f5
    }
    return (
        <div className="color-box" style={{ backgroundColor: colors }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;