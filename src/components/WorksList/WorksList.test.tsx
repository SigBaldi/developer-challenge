import React from 'react';
import TestRenderer from 'react-test-renderer';
import WorksList from './WorksList';

describe('Header', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<WorksList works={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
