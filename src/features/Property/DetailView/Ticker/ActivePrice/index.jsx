import OpaqueTickerComp from 'components/OpaqueTickerComp';
import GreyTickerText from 'components/GreyTickerText';

function ActivePrice() {
  return (
    <OpaqueTickerComp
      labelText="Active"
      value={<GreyTickerText>$100,000</GreyTickerText>}
    />
  );
}

export default ActivePrice;
