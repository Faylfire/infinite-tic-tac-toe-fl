import React from 'react';
import Square from './Square';

/*
const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};
*/

//Board Styling using Tailwind
const style = "border-4 border-blue-700 rounded-lg w-64 h-64 mx-auto grid grid-rows-3 grid-cols-3";

const Board = ({ squares, onClick, tbRemoved=null, win=null }) => {
    
    //win prop passes down to the specified square on the board when win condition is true and highlights the winning path
    return (
        <div className={style}>
            {squares.map((square, i) => (
                <Square 
                    key={i} 
                    value={square} 
                    tbRemoved={i===tbRemoved} 
                    onClick={() => onClick(i)} 
                    win={win? win.includes(i):false}/>
            ))}
        </div>
    )}

export default Board;