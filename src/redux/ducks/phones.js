import { getFakeLatencyPhones } from '../../services/phones-service';

export const initialState = {
    PhoneList: [],
    PhoneSelected: {}
}

export const GET_PHONES = 'GET_PHONES';
export const SET_SELECTED_PHONE = 'SET_SELECTED_PHONE';

export default function phonesReducer(state = initialState, action){
    switch(action.type){
        case GET_PHONES: {
            return {
                ...state,
                PhoneList: action.payload
            }
        }
        case SET_SELECTED_PHONE: {
            return {
                ...state,
                PhoneSelected: action.payload
            }
        }
        default:
            return state
    }
}

export const getPhonesAction = () => async (dispatch) => {
    try {
        const phones = await getFakeLatencyPhones()
        dispatch({
            type: GET_PHONES,
            payload: phones
        })
    } catch (error) {
        console.log(error)
    }
}

export const setSelectedPhoneAction = (phone) => async (dispatch) => {
    try {
        dispatch({
            type: SET_SELECTED_PHONE,
            payload: phone
        })
    } catch (error) {
        console.log(error)
    }
}