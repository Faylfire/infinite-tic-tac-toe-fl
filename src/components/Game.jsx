import React, { useState, useRef } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';
//https://www.npmjs.com/package/js-confetti
import JSConfetti from 'js-confetti'

//Initialize canvas for confetti on win condition
const jsConfetti = new JSConfetti()

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const [moves, setMoves] = useState([])
    const winner = calculateWinner(history[stepNumber]);
    const restartBtnRef = useRef()
    console.log(winner)

    //Confetti animation added on win condition
    if (winner){
        restartBtnRef.current.focus()
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸','🦄', '😄','😁','😆','😅','😂','🤣','😍','🥰','😘'],
            confettiNumber: 300,
            emojiSize:15,
         })
         jsConfetti.addConfetti({

            confettiNumber: 300,

         })
    }

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current]
        
        // If user click an occupied square or if game is won, return
        if(winner || squares[i]) return;
  
        
        // Put an X or an O in the clicked square 
        if (moves.length > 5){
            squares[moves[0]] = null
            moves.shift()
        }
        //Stores an array of the past moves up to 6 for infinite Tic-Tac-Toe
        setMoves((prevM)=>[...prevM, i])

        //Sets the correct player mark X or O for the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);        
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };

    //Rests state for game restart
    const restart = () => {
        setHistory([Array(9).fill(null)])
        setStepNumber(0)
        setXisNext(true)
        setMoves([])
    }

    //Render Moves is used to display a history of the past moves,  functionality removed in infinite Tic-Tac-Toe
    const renderMoves = () => (
        //Add the following div to the component output when using the history
        //<div className="mt-4"><ul>{renderMoves()}</ul></div>
        history.map((_step, move) => {
            const destination = move ? `Move #${move}` : 'Back to Start';
            return (
                <li key={move}>
                    <button className="bg-blue-400 px-3 py-2 rounded-lg mt-2 hover:bg-blue-500" onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })        
    )

    return (
        <>
        <div>
        <h1 className="pt-10 text-4xl text-center flex justify-center font-bold text-gray-900">Tic-Tac-Toe ∞</h1>
        <p>* Only three moves will be retained, past moves disappear~</p>
        </div>
        <div className="flex flex-col mt-4 mx-auto w-full md:w-2/3 lg:w-1/2 bg-blue-900 p-10 rounded-lg">
            <div className="mx-4">
                <div className="w-56 mx-auto mb-8">
                    <p className="text-blue-200 text-3xl font-bold">{winner==="Tie"? "It's a tie!" : (winner? 'Winner: ' + (xIsNext? 'O' : 'X') + '!': 'Next Player: ' + (xIsNext ? 'X' : 'O'))}</p>
                </div>
                <Board squares={history[stepNumber]} onClick={handleClick} win={winner} tbRemoved={moves.length===6?moves[0]:null}/>
                <button ref={restartBtnRef} className="bg-blue-400 text-gray-900 px-6 py-3 rounded-lg mt-10 block mx-auto hover:bg-green-200 text-2xl focus:bg-green-200 focus:border-2 forcus:border-blue-500 transform transition-transform duration-200 hover:scale-110 cursor-pointer" onClick={() => restart()}>New Game</button>
            </div>

        </div>
        </>
    )
}

export default Game;