import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhonesAction, setSelectedPhoneAction } from '../redux/ducks/phones';
import LoaderComponent from './LoaderComponent.jsx';
import PhoneListComponent from './PhoneListComponent';


const PhoneListContainer = () => {

    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()
    const phones = useSelector(store => store.phones.PhoneList)
    
    const setPhone = (phone) => dispatch(setSelectedPhoneAction(phone))
    
    useEffect(() => {
        dispatch(getPhonesAction())
    },[dispatch])

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
            setPhone={setPhone}
        />
    }
    
}

export default PhoneListContainer