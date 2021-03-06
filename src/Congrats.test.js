import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from '../test/testUtils'
import Congrats from './Congrats';

//if change, check for tests that rely on it,
//could spawn false positives in testing otherwise.
const defaultProps = { success: false };

/**
 * Factory function to create a  ShallowWrapper for Congrats
 * @function setup
 * @param  {Object} props - Component props to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe("");
});
test('renders text when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
})
