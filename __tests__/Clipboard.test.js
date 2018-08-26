import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';

import Clipboard from '../src/lib';

describe('Clipbaord', () => {

  it('should render the `render` props', () => {
    const Button = () => <button>Copy</button>

    const wrapper = shallow((
      <Clipboard
        text={'copy on button click'}
        render={Button}
      />
    ));

    expect(wrapper.find('button')).toHaveLength(1);

  });

  it('should allow the `render` component to invoke `copy`', () => {

    const Button = ({copy}) => <button onClick={copy}>Copy</button>;

    const wrapper = shallow((
      <Clipboard
        text={'copy on button click'}
        render={Button}
      />
    ));

    const mockCopy = jest.fn();

    wrapper.instance().copy = mockCopy;

    wrapper.find('button').simulate('click');

    expect(mockCopy).toHaveBeenCalled();

  });

  it('should invoke `onSucess` if `copy` is successful', () => {

    const Button = ({copy}) => <button onClick={copy}>Copy</button>;

    const mockOnSuccess = jest.fn();

    const wrapper = shallow((
      <Clipboard
        text={'copy on button click'}
        render={Button}
        onSuccess={mockOnSuccess}
      />
    ));

    wrapper.instance()._copyToClipboard = jest.fn().mockImplementation(() => true);

    wrapper.find('button').simulate('click');

    expect(mockOnSuccess).toHaveBeenCalled();

  })

  it('should invoke `onError` if `copy` is unsuccessful', () => {

    const Button = ({copy}) => <button onClick={copy}>Copy</button>;

    const mockOnError = jest.fn();

    const wrapper = shallow((
      <Clipboard
        text={'copy on button click'}
        render={Button}
        onError={mockOnError}
      />
    ));

    wrapper.instance()._copyToClipboard = jest.fn().mockImplementation(() => { throw new Error('copy failed!') } );

    wrapper.find('button').simulate('click');

    expect(mockOnError).toHaveBeenCalled();

  })

  it('should pass `props` to the `render` component', () => {

    const Button = ({foo}) => <button>{foo}</button>;

    const props = { foo: 'bar' };

    const wrapper = shallow((
      <Clipboard
        text={'copy on button click'}
        render={Button}
        props={props}
      />
    ));

    expect(wrapper.find('button').text()).toEqual('bar');

  })

});
