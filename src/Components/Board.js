
import { useState, useEffect } from 'react';
import { useBoard } from './DataContext';
import Solve from './solve';
import Play from './play';

const Board = () => {
    const { setBoard } = useBoard();
    const { board } = useBoard();
    const initial = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];
    const BD4 = [[2, 7, 4, 0, 9, 1, 0, 0, 5],
    [1, 0, 0, 5, 0, 0, 0, 9, 0],
    [6, 0, 0, 0, 0, 3, 2, 8, 0],
    [0, 0, 1, 9, 0, 0, 0, 0, 8],
    [0, 0, 5, 1, 0, 0, 6, 0, 0],
    [7, 0, 0, 0, 8, 0, 0, 0, 3],
    [4, 0, 2, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 7, 0],
    [8, 0, 0, 3, 4, 9, 0, 0, 0]]
    const [valueArr, setValueArr] = useState(initial);
    const [counter, setCounter] = useState(true); //control flag

    const inputChange = (row, col, e) => {
        const newValue = e.target.value;
        const parsedValue = newValue === '' ? '' : parseInt(newValue, 10);
        const result = valueArr.map((rowArr, rowIndex) => {
            if (rowIndex === row) {
                return rowArr.map((cell, colIndex) => (colIndex === col ? parsedValue : cell));
            }
            return rowArr;
        });
        setValueArr(result);
        setCounter(true);

    };

    useEffect(() => {
        if(valueArr && counter) {
            setBoard(valueArr);
            setCounter(false);
        }
    }, [valueArr, counter]);

    useEffect(() => {
        if (board) {
            console.log(board);
            setValueArr(board);
        }
    }, [board]);

    return (
        <div>
            <div>
                {valueArr instanceof Array && valueArr.length > 0 &&
                    <table className="border-collapse border-solid">
                        <tbody>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, index) => {
                                return <tr key={index}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cindex) => {
                                        return <td key={index + cindex}>
                                            <input className="h-[50px] w-[50px] border-solid text-center font-semibold"
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[1-9]*"
                                                value={valueArr[row][col] === 0 ? '' : valueArr[row][col]}
                                                onChange={(event) => { inputChange(row, col, event) }}></input>
                                        </td>
                                    })}
                                </tr>
                            })}
                        </tbody>

                    </table>}

            </div>
            <div className="w-full mt-20 flex mr-auto ml-auto justify-between ">
                <Solve />
                <Play />
            </div>

        </div>
    )
}


export default Board;