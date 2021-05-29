import styled from 'styled-components';
import LightBaseText from 'components/LightBaseText';
import housesSvg from './houses.svg';
import DisplayText1 from 'components/DisplayText1';

function PropertyAddress() {
  return (
    <ScPropertyAddress>
      <LightBaseText>Own</LightBaseText>

      <DisplayText1>14 Flood St.</DisplayText1>

      <ScAddress>New Orleans, LA 70122</ScAddress>

      <img src={housesSvg} alt="" />
    </ScPropertyAddress>
  );
}

const ScPropertyAddress = styled.div`
  text-align: center;
`;

const ScAddress = styled(LightBaseText)`
  margin-bottom: 0.5rem;
`;

export default PropertyAddress;
