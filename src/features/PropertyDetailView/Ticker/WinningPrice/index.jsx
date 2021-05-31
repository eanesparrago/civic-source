import styled from 'styled-components';
import OpaqueTickerComp from '../components/OpaqueTickerComp';
import GreenTickerText from '../components/GreenTickerText';

function WinningPrice() {
  return (
    <ScOpaqueTickerComp
      labelText="Winning"
      value={<GreenTickerText>$100,000</GreenTickerText>}
    />
  );
}

const ScOpaqueTickerComp = styled(OpaqueTickerComp)`
  padding-left: 1.5em;
  padding-right: 3.0625em;
`;

export default WinningPrice;
