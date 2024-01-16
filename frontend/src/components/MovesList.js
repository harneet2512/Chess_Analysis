import { useAppContext }from './Context'
import './MovesList.css'
import React from 'react'
const MovesList = () => {

    const { appState : {movesList} } = useAppContext();

    return <div className='moves-list'>
        {movesList.map((move,i) => 
            <div key={i} data-number={Math.floor(i/2)+1}>{move}</div>
        )}
    </div>
}

export default MovesList