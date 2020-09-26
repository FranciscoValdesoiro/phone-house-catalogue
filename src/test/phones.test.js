import {GET_PHONES_URL} from '../constants/endpoints'
import phonesReducer, 
{
    GET_PHONES,
    getPhonesAction,
    initialState,
    SET_SELECTED_PHONE,
    setSelectedPhoneAction,
} from "../redux/ducks/phones"

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import mockAxios from 'jest-mock-axios';
import mockPhones from '../__mocks__/phones'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Phones', () => {

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    afterEach(() => {
        mockAxios.reset();
    });
    
  

    it('The "getPhones" endpoint is called when "getPhonesAction" is dispatched', async () => {
         
        store.dispatch(getPhonesAction());
      
        expect(mockAxios.get).toHaveBeenCalledWith(GET_PHONES_URL)
    });
    
    it('The "setSelectedPhoneAction" is dispatched', async () => {

        const [phone] = mockPhones;

        const expectedActions = [
            { 
                type: 'SET_SELECTED_PHONE',
                payload: phone
            }
        ]
        
        store.dispatch(setSelectedPhoneAction(phone));
        expect(store.getActions()).toEqual(expectedActions)
       
    });


    it('should return the initial state', () => {
        expect(phonesReducer(initialState, {})).toMatchSnapshot()
    })

    it('should set the state with the phone selected', () => {
        const state = {
            PhoneList: [],
            PhoneSelected: {
                id: 0,
                name: "iPhone 7",
                manufacturer: "Apple",
                description: "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
                color: "black",
                price: 769,
                imageFileName: "IPhone_7.png",
                screen: "4,7 inch IPS",
                processor: "A10 Fusion",
                ram: 2
            }
        }

        const action = {
            type: SET_SELECTED_PHONE,
            payload: {
                id: 0,
                name: "iPhone 7",
                manufacturer: "Apple",
                description: "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
                color: "black",
                price: 769,
                imageFileName: "IPhone_7.png",
                screen: "4,7 inch IPS",
                processor: "A10 Fusion",
                ram: 2
            }
        }
        expect(phonesReducer(initialState, action)).toEqual(state)
    })

    it('should set PhoneList state with the phone list recived', () => {
        const state = {
            PhoneList: [
                {
                    id: 0,
                    name: "iPhone 7",
                    manufacturer: "Apple",
                    description: "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
                    color: "black",
                    price: 769,
                    imageFileName: "IPhone_7.png",
                    screen: "4,7 inch IPS",
                    processor: "A10 Fusion",
                    ram: 2
                }
            ],
            PhoneSelected: {}
        }
        const action = {
            type: GET_PHONES,
            payload: [{
                id: 0,
                name: "iPhone 7",
                manufacturer: "Apple",
                description: "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
                color: "black",
                price: 769,
                imageFileName: "IPhone_7.png",
                screen: "4,7 inch IPS",
                processor: "A10 Fusion",
                ram: 2
            }]
        }

        expect(phonesReducer(initialState, action)).toEqual(state)
    })
});
