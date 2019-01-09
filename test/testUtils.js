import checkPropTypes from 'check-prop-types';

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
