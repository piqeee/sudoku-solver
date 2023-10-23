import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {useBoard} from './DataContext';

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const solve = (bd) => {
    const solve_bd = (bd) => {
        
        if (is_solved(bd)) {

            return bd;
        } else {
            const nextBoard = next_board(bd);
            if (nextBoard === null) {
                return false;
            }
            return solve_lobd(nextBoard);
        }
    }



     const solve_lobd = (lobd) => {
    if (lobd.length === 0) {
        return false;
    } else {
        const tryCatch = solve_bd(lobd[0]);
        if (tryCatch !== false) {
            return tryCatch;
        } else {
            return solve_lobd (lobd.slice(1))
        }
    }
}

return solve_bd(bd);
}

export const is_solved = (bd) => {
for (let i = 0; i < bd.length; i++) {
    for (let j = 0; j < bd[i].length; j++) {
        if (bd[i][j] === 0) {
            return false;
        }
    }
}

return true;
}

export const next_board = (bd) => {
const position = find_blank(bd);
const fill = fillNumber1to9(position, bd);
return keep_valid_board(fill);
}

export const find_blank = (bd) => {
for (let i = 0; i < bd.length; i++) {
    for (let j = 0; j < bd[i].length; j++) {
        if (bd[i][j] === 0) {
            return {row: i, col: j}
        }
    }
}

return null;
}


export const fillNumber1to9 = (p, bd) => {
const filledBoards = [];

for (let i = 1; i <= 9; i++) {
    const boardCopy = deepCopy(bd);
    boardCopy[p.row][p.col] = i;
    filledBoards.push(boardCopy);
}
return filledBoards;
}

const keep_valid_board = (lobd) => {
return lobd.filter(valid_board);
}


export const valid_board = (bd) => {
const ROW_UNITS = Array.from({ length: 9 }, (_, row) =>
  Array.from({ length: 9 }, (_, col) => [row, col])
);

const COL_UNITS = Array.from({ length: 9 }, (_, col) =>
  Array.from({ length: 9 }, (_, row) => [row, col])
);

const BOX_UNITS = Array.from({ length: 9 }, (_, box) => {
  const boxRow = Math.floor(box / 3) * 3;
  const boxCol = (box % 3) * 3;
  const unit = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      unit.push([boxRow + row, boxCol + col]);
    }
  }
  return unit;
});

const UNITS = [...ROW_UNITS, ...COL_UNITS, ...BOX_UNITS];

const validUnits = (units) => {
  return units.every(validUnit);
};

const validUnit = (unit) => {
  const unitValues = unit.map((position) => {
    const value = readPos(position);
    return value;
  });

  const onlyVals = unitValues.filter((val) => val !== 0);
  return !hasDuplicates(onlyVals);
};

const readPos = (position) => {
  const [row, col] = position;
  return bd[row][col];
};

const hasDuplicates = (lov) => {
  const set = new Set();
  for (let i = 0; i < lov.length; i++) {
    if (set.has(lov[i])) {
      return true;
    }
    set.add(lov[i]);
  }
  return false;
};

for (let i = 0; i < UNITS.length; i++) {
  if (!validUnit(UNITS[i])) {
    return false;
  }
}

return true;
};

const Solve = () => {
    const {board, setBoard} = useBoard();
    const [solveBoard, setSolveBoard] = useState(null);



    const handleOnclick = (bd) => {

        if (bd) {
            const solved = solve(bd);
            console.log(solved);
            setSolveBoard(solved);
            setBoard(solved);
            console.log("data after solve", board);
        } else {
            console.log('Data is not available');
        }
        console.log(solveBoard);
    }

    useEffect(() => {
        console.log("solveBoard",solveBoard);
    }, [solveBoard]);
      


    return (
        <div className="border-solid border-white border-2 w-max rounded-xl">
            <Button className="w-[160px] h-[50px]" onClick={() => handleOnclick(board)}>
                Solve
            </Button>
        </div>
    )
}

export default Solve;