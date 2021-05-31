import styled from 'styled-components';
import DisplayText1 from 'components/DisplayText1';
import TopNavLightText from '../components/TopNavLightText';
import housesSvg from './houses.svg';

function PropertyAddress() {
  return (
    <ScPropertyAddress>
      <InfoBlock>
        <TopNavLightText>Own</TopNavLightText>

        <DisplayText1>14 Flood St.</DisplayText1>

        <TopNavLightText>New Orleans, LA 70122</TopNavLightText>
      </InfoBlock>

      <img src={housesSvg} alt="" />
    </ScPropertyAddress>
  );
}

const ScPropertyAddress = styled.div`
  text-align: center;
`;

const InfoBlock = styled.div`
  margin-bottom: 0.75em;

  > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export default PropertyAddress;
