import { useAppContext }from './Context'
import { takeBack } from './move';
import React from 'react'
const TakeBack = () => {

    const { dispatch } = useAppContext();

    return <div>
        <button onClick={() => dispatch(takeBack())}>Take Back</button>
    </div>
}

export default TakeBack