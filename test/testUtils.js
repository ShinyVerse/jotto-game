import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux'; 

import rootReducer from '../src/reducers';
/**
 * create a testing store with imported reducers, middleware and initial this.state.
 * globals: rootReducer
 * @param {Object} initialState - initial state for store
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Returns node(s) with the given selector attribute
 * @params {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @params {String} val - Value of selector attribute for search
 * @params {String} selector - optional, default set to data-test
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val, selector ='data-test') => {
  return wrapper.find(`[${selector}='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
    expect(propError).toBeUndefined();
}
