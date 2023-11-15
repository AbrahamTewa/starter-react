/* eslint-env node, jest */

import renderer from 'react-test-renderer';

import Title from './Title';

describe('Basic tests', () => {
  test('Empty string', () => {
    const title = <Title>Hello world</Title>;

    // Snapshot
    const render = renderer.create(title);
    expect(render.toJSON()).toMatchSnapshot();
  });

  test('Simple string', () => {
    const titleText = 'One simple string';
    const title = <Title>{titleText}</Title>;

    // Snapshot
    const render = renderer.create(title);
    expect(render.toJSON()).toMatchSnapshot();
  });
});
