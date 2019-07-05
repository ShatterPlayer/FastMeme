import styled from 'styled-components';

const NumberPickersWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: 3;

  @media (max-width: 975px) {
    position: absolute;
    bottom: 62px;
    flex-direction: row;
    width: 100%;
  }
`;

export default NumberPickersWrapper;
