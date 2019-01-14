import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const contents = this.props.success
      ? null : (
        <form className='form-inline'>
          <label>
            Enter Guess
            <input
              data-test='input-box'
              className='mb-2 mx-sml-3'
              id='word-guess'
              type='text'
              />
          </label>
          <button
            data-test='submit-button'
            className='btn btn-primary mb-r'
            type='submit'>
            Submit
          </button>
        </form>
      )
    return (
      <div data-test='component-input'>
        { contents }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps)(Input);
