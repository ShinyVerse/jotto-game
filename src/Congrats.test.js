import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * Factory function to create a  ShallowWrapper for Congrats
 * @function setup
 * @param  {Object} props - Component props to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
}

test('renders without error', () => {

});
test('renders no text when `success` prop is false', () => {

});
test('renders text when `success` prop is true', () => {

});
