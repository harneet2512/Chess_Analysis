import React from 'react'
import './App.css';
import Board from './Board';
import { reducer } from './reducer'
import { useReducer } from 'react'
import { initGameState } from './constant';
import AppContext from './Context'
import Control from './Control';
import TakeBack from './TakeBack';
import MovesList from './MovesList';
import ChessArrow from './Arrow'


function App() {

    const [appState, dispatch ] = useReducer(reducer,initGameState);

    const providerState = {
        appState,
        dispatch
    }

    return (
        <AppContext.Provider value={providerState} >
            <div className="App">
                
                <Board/>
                <Control>
                    <MovesList/>
                    <TakeBack/>
                </Control>
                <ChessArrow />
            </div>
        </AppContext.Provider>
    ); 
}

export default App;