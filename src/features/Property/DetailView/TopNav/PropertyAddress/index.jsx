import styled from 'styled-components';
import LightBaseText from 'components/LightBaseText';
import housesSvg from './houses.svg';
import DisplayText1 from 'components/DisplayText1';

function PropertyAddress() {
  return (
    <ScPropertyAddress>
      <InfoBlock>
        <LightBaseText>Own</LightBaseText>

        <DisplayText1>14 Flood St.</DisplayText1>

        <LightBaseText>New Orleans, LA 70122</LightBaseText>
      </InfoBlock>

      <img src={housesSvg} alt="" />
    </ScPropertyAddress>
  );
}

const ScPropertyAddress = styled.div`
  text-align: center;
`;

const InfoBlock = styled.div`
  margin-bottom: 0.75rem;

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export default PropertyAddress;
