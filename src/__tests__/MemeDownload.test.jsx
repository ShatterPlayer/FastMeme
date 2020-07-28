import React from 'react';
import FileSaver from 'file-saver';
import { fireEvent, cleanup, render } from '@testing-library/react';

import MemeDownload from '../components/MemeDownload';

afterEach(cleanup);

FileSaver.saveAs = jest.fn();

const canvasHTMLObject = document.createElement('canvas');
const blob = new Blob();
canvasHTMLObject.toBlob = cb => cb(blob);

const setup = propOverrides => {
  const props = {
    canvas: canvasHTMLObject,
    imageExist: true,
    ...propOverrides
  };

  const { getByText } = render(<MemeDownload {...props} />);
  const downloadButton = getByText('Save');

  return {
    props,
    downloadButton
  };
};

describe('MemeDownload component', () => {
  it('can start downloading meme (using FileSaver)', () => {
    const { downloadButton } = setup();

    fireEvent.click(downloadButton);

    expect(FileSaver.saveAs).toBeCalled();
  });

  it('can not start downloading meme if there is not image', () => {
    const { downloadButton } = setup({ imageExist: false });

    fireEvent.click(downloadButton);
    expect(FileSaver.saveAs).not.toBeCalled();
  });
});
