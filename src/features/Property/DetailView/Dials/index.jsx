import styled from 'styled-components';

function Dials() {
  return (
    <ScDials>
      <ScLeftDial />
      <ScRightDial />
    </ScDials>
  );
}

const ScDials = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
`;

const Dial = styled.div`
  background-color: #d8d8d8;
  width: 16rem;
  height: 16rem;
  border-radius: 10000px;
  cursor: pointer;
  pointer-events: all;
`;

const ScLeftDial = styled(Dial)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-85%);
`;

const ScRightDial = styled(Dial)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateX(85%);
`;

export default Dials;
