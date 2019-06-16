import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Text from '../components/Text';

afterEach(() => cleanup());

const setup = propOverrides => {
  const props = Object.assign(
    {
      description: 'Something, bla, bla',
      setText: jest.fn(),
      text: ''
    },
    propOverrides
  );

  const { getByTestId } = render(<Text {...props} />);
  const inputField = getByTestId('inputField');

  return {
    props,
    inputField
  };
};

describe('Text component', () => {
  it('is empty initially', () => {
    const { inputField } = setup();

    expect(inputField.textContent).toBe('');
  });

  it('returns typed text', () => {
    const {
      inputField,
      props: { setText }
    } = setup();

    fireEvent.change(inputField, { target: { value: 'Some text, whatever' } });

    expect(setText).toBeCalledWith('Some text, whatever');
  });

  describe('text validation', () => {
    it('can not go to new line [press enter]', () => {
      const {
        inputField,
        props: { setText }
      } = setup();

      fireEvent.change(inputField, { target: { value: '\r\n' } });

      expect(setText).not.toBeCalled();
    });
  });
});
