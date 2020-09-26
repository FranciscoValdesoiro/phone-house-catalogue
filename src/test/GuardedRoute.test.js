import React from 'react';
import GuardedRoute from '../components/GuardedRoute.jsx'
import { mount } from 'enzyme'

import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


describe('GuardedRoute', () => {
 
const history = createMemoryHistory()
 
  it('Should render the GuardedRoute component', () => {

    const wrapper = mount( <Router history={history}>
        <GuardedRoute  />
      </Router>)
    expect(wrapper).toMatchSnapshot()
  })

});