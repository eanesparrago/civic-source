import styled from 'styled-components';
import OpaqueTickerComp from '../components/OpaqueTickerComp';
import RedTickerText from '../components/RedTickerText';

function OutbidPrice() {
  return (
    <ScOpaqueTickerComp
      labelText="Outbid"
      value={<RedTickerText>$100,000</RedTickerText>}
    />
  );
}

const ScOpaqueTickerComp = styled(OpaqueTickerComp)`
  padding-right: 1.375em;
`;

export default OutbidPrice;
