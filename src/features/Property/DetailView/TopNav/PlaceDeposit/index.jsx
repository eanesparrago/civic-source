import styled from 'styled-components';
import DisplayText1 from 'components/DisplayText1';
import LightBaseText from 'components/LightBaseText';

function PlaceDeposit() {
  return (
    <ScPlaceDeposit>
      <LightBaseText>To</LightBaseText>

      <DisplayText1>Start</DisplayText1>

      <LightBaseText>Place Deposit</LightBaseText>
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
