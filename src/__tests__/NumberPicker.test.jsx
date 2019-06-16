import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import NumberPicker from '../components/NumberPicker';

afterEach(() => cleanup());

const setup = propOverrides => {
  const props = Object.assign(
    {
      description: 'Something, bla, bla, bla',
      setNumber: jest.fn(),
      number: 40
    },
    propOverrides
  );

  const { getByText, getByTestId } = render(<NumberPicker {...props} />);
  const input = getByTestId('number_input');
  const incrementBtn = getByText('+');
  const decrementBtn = getByText('-');

  return {
    props,
    input,
    incrementBtn,
    decrementBtn
  };
};

describe('NumberPicker component', () => {
  it('returns picked number', () => {
    const {
      input,
      props: { setNumber }
    } = setup();

    fireEvent.change(input, { target: { value: 10 } });

    expect(setNumber).toBeCalledWith(10);
  });

  describe('action buttons', () => {
    it('can increment number', () => {
      const {
        incrementBtn,
        props: { setNumber, number }
      } = setup();

      fireEvent.click(incrementBtn);

      expect(setNumber).toBeCalledWith(number + 1);
    });

    it('can decrement number', () => {
      const {
        decrementBtn,
        props: { setNumber, number }
      } = setup();

      fireEvent.click(decrementBtn);

      expect(setNumber).toBeCalledWith(number - 1);
    });
  });

  describe('number validation', () => {
    it('can not set number less than 1 using button', () => {
      const {
        decrementBtn,
        props: { setNumber }
      } = setup({ number: 1 });

      fireEvent.click(decrementBtn);

      expect(setNumber).not.toBeCalled();
    });

    it('can not set number less than 1 using input field', () => {
      const {
        input,
        props: { setNumber }
      } = setup();

      fireEvent.change(input, { target: { value: -5 } });

      expect(setNumber).not.toBeCalled();
    });

    it('can not set string instead of number', () => {
      const {
        input,
        props: { setNumber }
      } = setup();

      fireEvent.change(input, {
        target: { value: 'String is not number!!!' }
      });

      expect(setNumber).not.toBeCalled();
    });
  });
});
