import OpaqueTickerComp from '../components/OpaqueTickerComp';
import RedTickerText from '../components/RedTickerText';

function OutbidPrice() {
  return (
    <OpaqueTickerComp
      labelText="Outbid"
      value={<RedTickerText>$100,000</RedTickerText>}
    />
  );
}

export default OutbidPrice;
