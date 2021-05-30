import OpaqueTickerComp from '../components/OpaqueTickerComp';
import GreyTickerText from '../components/GreyTickerText';

function ActiveQuantity() {
  return (
    <OpaqueTickerComp
      labelText="Active"
      value={<GreyTickerText>24</GreyTickerText>}
    />
  );
}

export default ActiveQuantity;
