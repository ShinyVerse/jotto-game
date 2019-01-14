import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create ShallowWrapper for Input component
 * @param  {Object} initialState - state to be used, else default empty
 * @return {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    });
    test('renders input', () => {

    });
    test('renders submit button', () => {

    });
  });
  describe('word has been guessed', () => {

  });
});
describe('update state', () => {
  test('renders component without error', () => {

  });
  test('does not render input', () => {

  });
  test('does not render submit button', () => {

  });
})
