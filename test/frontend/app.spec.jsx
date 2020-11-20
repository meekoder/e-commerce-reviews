import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../client/src/components/App';

describe('Main app unit tests', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should mount a full DOM', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.container').length).toBe(1);
    expect(wrapper.find('.listBtn')).toExist();
    expect(wrapper.find('.ratings')).toExist();
  });
});
