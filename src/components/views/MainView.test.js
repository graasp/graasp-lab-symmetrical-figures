import React from 'react';
import { shallow } from 'enzyme';
import MainView from './MainView';

describe('<MainView />', () => {
  const props = {
    handleView: jest.fn(),
    handleForm: jest.fn(),
    postMessage: jest.fn(),
    classes: {},
  };
  const component = shallow(<MainView {...props} />);
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
