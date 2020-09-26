import React from 'react';
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import App from '../App.jsx';
import { mount } from 'enzyme'
import '@testing-library/jest-dom';
import generateStore from '../redux/store';


describe('App', () => {
  
  generateStore()
  const mockStore = configureMockStore([thunk]);
  

  it('should render a startup component and inizialice the store', () => {
    const store = mockStore({
      phones: {
        PhoneSelected: {},
        PhoneList:  [  
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
      }
             
    })
    
    const wrapper = mount( <Provider store={store}><App/></Provider>)
    expect( wrapper ).toMatchSnapshot();
  })
});