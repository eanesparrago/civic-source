import styled from 'styled-components';
import housesSvg from './houses.svg';
import InfoTypography from '../components/InfoTypography';

function PropertyAddress() {
  return (
    <ScPropertyAddress>
      <ScInfoTypography
        line1Text="Own"
        line2Text="14 Flood St."
        Line3Text="New Orleans, LA 70122"
      />

      <img src={housesSvg} alt="" />
    </ScPropertyAddress>
  );
}

const ScPropertyAddress = styled.div`
  text-align: center;
`;

const ScInfoTypography = styled(InfoTypography)`
  margin-bottom: 0.75em;
`;

export default PropertyAddress;
