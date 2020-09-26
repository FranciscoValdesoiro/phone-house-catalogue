import {GET_PHONES_URL} from '../constants/endpoints'
import {getCall, getFakeLatencyCall} from '../services/api-call-service';
import mockAxios from 'jest-mock-axios';

describe('Api-Call', () => {

    const response = {
        data: [
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
        ]
    }
   
    afterEach(() => {
        mockAxios.reset();
    });
    
    it('Axios get method is called when "getCall" is called', async () => {
          
        let catchFn = jest.fn(),
        thenFn = jest.fn();

        getCall(GET_PHONES_URL)
            .then(thenFn)
            .catch(catchFn)

        expect(mockAxios.get).toHaveBeenCalledWith(GET_PHONES_URL)
        mockAxios.mockResponse(response);
        
    });

    it('Axios get method is called when "getFakeLatencyCall" is called', async () => {
         
        let catchFn = jest.fn(),
        thenFn = jest.fn();    

       getFakeLatencyCall(GET_PHONES_URL)
        .then(thenFn)
        .catch(catchFn);

        mockAxios.mockResponse(response);

        expect(mockAxios.get).toHaveBeenCalledWith(GET_PHONES_URL)
    });
    
});
