import OpaqueTickerComp from 'components/OpaqueTickerComp';
import GreenTickerText from 'components/GreenTickerText';

function WinningPrice() {
  return (
    <OpaqueTickerComp
      labelText="Winning"
      value={<GreenTickerText>$100,000</GreenTickerText>}
    />
  );
}

export default WinningPrice;
