import React from 'react';
import TestRenderer from 'react-test-renderer';
import Work from './Work';

const mockWork = {
  id: 0,
  title: 'Dummy',
  tags: ['Sold Out'],
  image:
    '//cdn.shopify.com/s/files/1/0260/5524/5923/products/fightforadream_nav_8ecfb9fd-b156-4995-848a-6a5c84c9991a_500x.jpg?v=1617707578',
  url: 'https://shop.avantarte.com/products/dummy',
  price: 7500.0,
};

describe('Header', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Work work={mockWork} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
