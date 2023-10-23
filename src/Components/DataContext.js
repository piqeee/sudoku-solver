
import React, { createContext, useContext, useState } from 'react';


export const BoardContext = createContext();

const BD4 = [[2,7,4,0,9,1,0,0,5],
                [1,0,0,5,0,0,0,9,0],
                [6,0,0,0,0,3,2,8,0],
                [0,0,1,9,0,0,0,0,8],
                [0,0,5,1,0,0,6,0,0],
                [7,0,0,0,8,0,0,0,3],
                [4,0,2,0,0,0,0,0,9],
                [0,0,0,0,0,0,0,7,0],
                [8,0,0,3,4,9,0,0,0]];

const initial = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]];

export const BoardProvider = ({children}) => {
    const [board, setBoard] = useState(initial);
    return (
        <BoardContext.Provider value={{board, setBoard}}>
            {children}
        </BoardContext.Provider>
    );
};

export const useBoard = () => {
    return useContext(BoardContext);
} 