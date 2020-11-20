import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../client/src/components/App';

describe('Main app unit tests', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
