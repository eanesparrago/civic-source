import styled from 'styled-components';
import DisplayText1 from 'components/DisplayText1';
import TopNavLightText from '../components/TopNavLightText';

function PlaceDeposit() {
  return (
    <ScPlaceDeposit>
      <TopNavLightText>To</TopNavLightText>

      <DisplayText1>Start</DisplayText1>

      <TopNavLightText>Place Deposit</TopNavLightText>
    </ScPlaceDeposit>
  );
}

const ScPlaceDeposit = styled.div`
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export default PlaceDeposit;
