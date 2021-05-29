import OpaqueTickerComp from 'components/OpaqueTickerComp';
import RedTickerText from 'components/RedTickerText';

function OutbidQuantity() {
  return (
    <OpaqueTickerComp
      labelText="Outbid"
      value={<RedTickerText>12</RedTickerText>}
    />
  );
}

export default OutbidQuantity;
