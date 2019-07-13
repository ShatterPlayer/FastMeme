import styled from 'styled-components';

const TextFieldsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 1;

  @media (max-width: 975px) {
    position: absolute;
    bottom: 0;
    flex-direction: row;
    width: 100%;
    border-top: 2px solid #0c73a4;
    z-index: 6;
  }
`;

export default TextFieldsWrapper;
