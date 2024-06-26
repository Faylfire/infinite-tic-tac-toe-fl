import React from 'react';

/*
const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};
*/



const Square = ({ value, onClick, tbRemoved, win }) => {
    
    const style = "border-2 border-blue-700 font-extrabold text-3xl "
    const bgColor = win? "bg-orange-300" : (tbRemoved? "bg-red-200" :"bg-blue-200")
    //const winColor = 

    return (
    <button className={style.concat(bgColor)} onClick={onClick}>
        {value}
    </button>
)};

export default Square;