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
`;

const Dial = styled.div`
  background-color: #d8d8d8;
  width: 16rem;
  height: 16rem;
  border-radius: 10000px;
`;

const ScLeftDial = styled(Dial)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-80%);
`;

const ScRightDial = styled(Dial)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateX(80%);
`;

export default Dials;
