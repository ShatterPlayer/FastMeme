import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import MemeInput from '../components/MemeInput';

const dummyEventListener = (_, handler) => handler();
global.FileReader.prototype.addEventListener = dummyEventListener;
global.Image.prototype.addEventListener = dummyEventListener;

afterEach(() => cleanup());

const setup = (propOverrides, fileOptionsOverrides) => {
  const props = Object.assign(
    {
      setImage: jest.fn()
    },
    propOverrides
  );

  const sampleFile = new File(
    [''],
    'sample.png',
    Object.assign({ type: 'image/png' }, fileOptionsOverrides)
  );

  const eventObject = {
    target: {
      files: [sampleFile]
    }
  };

  const { baseElement } = render(<MemeInput {...props} />);
  const input = baseElement.querySelector('input');

  return {
    props,
    eventObject,
    input
  };
};

describe('MemeInput component', () => {
  it('returns file', () => {
    const {
      input,
      eventObject,
      props: { setImage }
    } = setup();

    fireEvent.change(input, eventObject);
    expect(setImage).toBeCalled();
  });

  it('can not return file with type other than image/png, image/jpeg', () => {
    const {
      input,
      eventObject,
      props: { setImage }
    } = setup({}, { type: 'text/javascript' });

    fireEvent.change(input, eventObject);

    expect(setImage).not.toBeCalled();
  });

  it('can return file multiple times without page reload', () => {
    const {
      input,
      props: { setImage }
    } = setup({}, { type: 'text/javascript' });

    const { eventObject: evtObj1 } = setup({}, { type: 'image/png' });
    const { eventObject: evtObj2 } = setup({}, { type: 'image/jpeg' });

    fireEvent.change(input, evtObj1);
    fireEvent.change(input, evtObj2);
    expect(setImage).toBeCalledTimes(2);
  });
});
