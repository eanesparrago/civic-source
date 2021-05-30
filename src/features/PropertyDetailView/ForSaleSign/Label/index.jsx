import styled from 'styled-components';
import houseSvg from './house.svg';

function Label({ className }) {
  return (
    <ScLabel className={className}>
      <ScHouseImg src={houseSvg} alt="Property" />

      <ScLabelText>Public Auction</ScLabelText>
    </ScLabel>
  );
}

const ScLabel = styled.div`
  height: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.66);
`;

const ScHouseImg = styled.img`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const ScLabelText = styled.span`
  font-size: 1.4375rem;
  font-weight: 300;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Label;
