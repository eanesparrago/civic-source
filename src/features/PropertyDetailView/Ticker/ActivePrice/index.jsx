import styled from 'styled-components';
import OpaqueTickerComp from '../components/OpaqueTickerComp';
import GreyTickerText from '../components/GreyTickerText';

function ActivePrice() {
  return (
    <ScOpaqueTickerComp
      labelText="Active"
      value={<GreyTickerText>$100,000</GreyTickerText>}
    />
  );
}

const ScOpaqueTickerComp = styled(OpaqueTickerComp)`
  padding-right: 3.0625em;
`

export default ActivePrice;
