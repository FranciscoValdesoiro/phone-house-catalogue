import { getCall, getFakeLatencyCall } from './api-call-service'
import { GET_PHONES_URL } from '../constants'

export function getPhones(){
    return getCall(GET_PHONES_URL)
}

export function getFakeLatencyPhones(){
    return getFakeLatencyCall(GET_PHONES_URL)
}