import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPhonesAction, setSelectedPhoneAction } from '../redux/ducks/phones';
import PhoneListComponent from './PhoneListComponent';


const PhoneListContainer = () => {

    const dispatch = useDispatch()
    const phones = useSelector(store => store.phones.PhoneList)
    
    const getPhones = () => dispatch(getPhonesAction())
    const setPhone = (phone) => dispatch(setSelectedPhoneAction(phone))
    
    const stableDispatch = useCallback(dispatch, [])

    useEffect(() => {
        stableDispatch(getPhonesAction())
    },[stableDispatch])


    return <PhoneListComponent
        phones={phones}
        getPhones={getPhones}
        setPhone={setPhone}
    />
    
}

export default PhoneListContainer