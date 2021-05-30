import DisplayText1 from 'components/DisplayText1';
import LightBaseText from 'components/LightBaseText';
import styled from 'styled-components';

function MarketValue() {
  return (
    <ScMarketValue>
      <LightBaseText>Market $40,000</LightBaseText>

      <DisplayText1>$5,000</DisplayText1>

      <LightBaseText>Reserve Price</LightBaseText>
    </ScMarketValue>
  );
}

const ScMarketValue = styled.div`
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export default MarketValue;
