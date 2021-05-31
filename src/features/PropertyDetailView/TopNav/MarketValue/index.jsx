import styled from 'styled-components';
import DisplayText1 from 'components/DisplayText1';
import TopNavLightText from '../components/TopNavLightText';

function MarketValue() {
  return (
    <ScMarketValue>
      <TopNavLightText>Market $40,000</TopNavLightText>

      <DisplayText1>$5,000</DisplayText1>

      <TopNavLightText>Reserve Price</TopNavLightText>
    </ScMarketValue>
  );
}

const ScMarketValue = styled.div`
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export default MarketValue;
