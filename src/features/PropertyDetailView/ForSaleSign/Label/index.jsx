import styled from 'styled-components';
import houseSvg from './house.svg';

function Label({ className }) {
  return (
    <ScLabel className={className}>
      <ScHouseImg src={houseSvg} alt="Property" />

      <ScLabelText>Public Auction</ScLabelText>

      <ScTranslucentBackground />
    </ScLabel>
  );
}

const ScLabel = styled.div`
  height: 2em;
  position: relative;
  display: flex;
  align-items: center;
`;

const ScHouseImg = styled.img`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
`;

const ScLabelText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  font-size: 1.4375em;
  font-weight: 300;
  white-space: nowrap;
  letter-spacing: 0.043em;
`;

const ScTranslucentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.66);
  z-index: -1;
  opacity: 0.85;
`;

export default Label;
