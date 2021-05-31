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

  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    font-size: 0.9rem;
  }
`;

const Dial = styled.div`
  background-color: ${(p) => p.theme.color.white};
  width: 16em;
  height: 16em;
  border-radius: 10000px;
  cursor: pointer;
  pointer-events: all;
`;

const ScLeftDial = styled(Dial)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-84%);
`;

const ScRightDial = styled(Dial)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateX(84%);
`;

export default Dials;
