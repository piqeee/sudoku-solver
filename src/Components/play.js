import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { sudoku_url, sudokuOptions } from './api';
import { useBoard } from './DataContext';



const Play = () => {

    const [data, setData] = useState(null);
    const { setBoard } = useBoard();

    const on_click = async () => {
        try {
            const response = await fetch(sudoku_url, sudokuOptions);
            const result = await response.json();
            console.log("consoled", result);
            const str = "";
            str = result.puzzle;
            const boardData = [];
            const itr = 0;
            while (itr < str.length) {
                let innerArr = [];
                let j = 0;

                while (j < 9) {
                    if (str[itr] === ".") {
                        innerArr.push("0");
                    } else {
                        innerArr.push(str[itr]);

                    }
                    itr++;
                    j++;
                }
                boardData.push(innerArr);
            }
            setData(boardData);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setBoard(data);
    }, [data]);

    

    return (
        <div className="border-solid border-white border-2 w-max rounded-xl">
            <Button className="w-[160px] h-[50px] " onClick={on_click}>
                Play
            </Button>
        </div>
    )

}

export default Play;