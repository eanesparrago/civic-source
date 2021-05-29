import OpaqueTickerComp from 'components/OpaqueTickerComp';
import GreenTickerText from 'components/GreenTickerText';

function WinningQuantity() {
  return (
    <OpaqueTickerComp
      labelText="Winning"
      value={<GreenTickerText>12</GreenTickerText>}
    />
  );
}

export default WinningQuantity;
