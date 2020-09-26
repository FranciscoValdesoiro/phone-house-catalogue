import React from 'react';
import DetailComponent from './DetailComponent';
import { setSelectedPhoneAction } from '../redux/ducks/phones';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const DetailContainer = () => {

    const dispatch = useDispatch()
    const setPhone = (phone) => dispatch(setSelectedPhoneAction(phone))
    const history = useHistory()

    const phone = useSelector(state => state.phones.PhoneSelected)

    return (
        <DetailComponent phone={phone} setPhone={setPhone} history={history}/>
    )           
}

export default DetailContainer;
