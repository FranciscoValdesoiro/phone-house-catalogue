import React from 'react';
import { shallow } from 'enzyme'
import CardComponent from '../components/CardComponent';
import { IMAGES_DIR } from '../constants'
import '@testing-library/jest-dom'


describe('CardComponent', () => {

  it('Should render the CardComponent ', () => {
    const name = 'Iphone 7'
    const wrapper = shallow( <CardComponent name={name} imgSrc={IMAGES_DIR + 'iphone7.png'}/>)
    expect( wrapper ).toMatchSnapshot()
  })

});