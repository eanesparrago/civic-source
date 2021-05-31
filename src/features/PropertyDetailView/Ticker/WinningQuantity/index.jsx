import styled from 'styled-components';
import OpaqueTickerComp from '../components/OpaqueTickerComp';
import GreenTickerText from '../components/GreenTickerText';

function WinningQuantity() {
  return (
    <ScOpaqueTickerComp
      labelText="Winning"
      value={<GreenTickerText>12</GreenTickerText>}
    />
  );
}

const ScOpaqueTickerComp = styled(OpaqueTickerComp)`
  padding-right: 0.6875em;
`;

export default WinningQuantity;
