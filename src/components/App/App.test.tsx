import React from 'react';
import ReactDOM from 'react-dom';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('should render correctly', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
