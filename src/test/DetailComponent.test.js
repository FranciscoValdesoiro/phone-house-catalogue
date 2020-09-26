import React from 'react';
import { shallow } from "enzyme";
import DetailComponent from "../components/DetailComponent";
import '@testing-library/jest-dom'
import mockPhones from '../__mocks__/phones'

describe('DetailComponent', () => {

  const [phone] = mockPhones;

  const mockHistory = {
    goBack: jest.fn()
  };

  const mockSetPhone = jest.fn();

  const wrapper = shallow(<DetailComponent phone={phone} setPhone={mockSetPhone} history={mockHistory} />)

    it('Should render DetailComponent', () => {
      expect( wrapper ).toMatchSnapshot()
    })
  
    it('Should call setPhone function received to props when the button is clicked', () => {
      wrapper.find('button').simulate('click');
      
      expect( mockSetPhone ).toHaveBeenCalled();
    })

    it('Should call goBack function received to props in history object when the button is clicked', () => {

      wrapper.find('button').simulate('click');
      
      expect( mockHistory.goBack ).toHaveBeenCalled();
    })

  });