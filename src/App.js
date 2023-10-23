import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';
import Solve from './Components/solve';
import Play from './Components/play';
import { BoardProvider } from './Components/DataContext'
import { useState } from 'react'

function App() {


  return (
    <BoardProvider>
       <div className=" bg-[#301934] w-full h-[1000px]">
        <div className="w-full h-max pt-12">
          <p className="mr-auto ml-auto w-max text-5xl font-semibold text-white">Sudoku Solver</p>
        </div>
        <div className="w-full h-max flex justify-center pt-12">
          <Board />
        </div>

    </div>

    </BoardProvider>
  );
}

export default App;
