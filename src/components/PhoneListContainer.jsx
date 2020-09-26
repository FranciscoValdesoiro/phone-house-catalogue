import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPhonesAction, setSelectedPhoneAction } from '../redux/ducks/phones';
import LoaderComponent from './LoaderComponent.jsx'
import PhoneListComponent from './PhoneListComponent';


const PhoneListContainer = () => {

    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()
    const phones = useSelector(store => store.phones.PhoneList)
    
    const getPhones = () => dispatch(getPhonesAction())
    const setPhone = (phone) => dispatch(setSelectedPhoneAction(phone))
    
    const stableDispatch = useCallback(dispatch, [])

    useEffect(() => {
        stableDispatch(getPhonesAction())
    },[stableDispatch])

    useEffect(() => {
        if (phones.length > 0) {
            setIsLoading(false)
        }     
    },[phones])


    if(isLoading){
        return <LoaderComponent />
    } else {
         return <PhoneListComponent
            phones={phones}
            getPhones={getPhones}
            setPhone={setPhone}
        />
    }
    
}

export default PhoneListContainer