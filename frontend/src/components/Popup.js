import React from 'react';
import { Status } from './constant';
import { useAppContext }from './Context'
import { closePopup} from './pop';
import PromotionBox from './PromotionBox'
import './Popup.css'

const Popup = ({children}) => {

    const { appState : {status}, dispatch } = useAppContext();

    const onClosePopup = () => {
        dispatch(closePopup())
    }

    if (status === Status.ongoing)
        return null

    return <div className="popup">
        {React.Children
            .toArray(children)
            .map (child => React.cloneElement(child, { onClosePopup }))}
    </div>
}

export default Popup