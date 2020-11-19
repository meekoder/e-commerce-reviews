import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../client/src/components/App';

describe('Main app unit tests', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  // it('should be selectable by class "suggestions-service"', () => {
  //   expect(shallow(<App />).is('.suggestions-service')).toBe(true);
  // });

  // it('should mount in a full DOM', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find('.suggestions-service').length).toBe(1);
  //   expect(wrapper.find('.heading')).toExist();
  //   expect(wrapper.find('.slider')).toExist();
  // });
});
