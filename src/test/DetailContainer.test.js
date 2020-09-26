import React from 'react';
import { mount } from "enzyme";
import DetailContainer from "../components/DetailContainer";
import '@testing-library/jest-dom'
import {useSelector} from 'react-redux'
import mockPhones from '../__mocks__/phones'

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  }));

describe('DetailContainer', () => {
  
    const [phone] = mockPhones;
    
    useSelector.mockImplementation((selector) => selector({
      phones: {
          PhoneList: [],
          PhoneSelected: phone
      }
    }));

    const setPhone = jest.fn()
    const history = { goBack: jest.fn()}

    const wrapper = mount(<DetailContainer phone={phone} setPhone={setPhone} history={history} />)

    it('Should render the DetailContainer component', () => {
      expect( wrapper ).toMatchSnapshot()
    })

  });