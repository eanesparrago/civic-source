import styled from 'styled-components';
import OpaqueTickerComp from '../components/OpaqueTickerComp';
import RedTickerText from '../components/RedTickerText';

function OutbidQuantity() {
  return (
    <ScOpaqueTickerComp
      labelText="Outbid"
      value={<RedTickerText>12</RedTickerText>}
    />
  );
}

const ScOpaqueTickerComp = styled(OpaqueTickerComp)`
  padding-left: 1.5em;
`;

export default OutbidQuantity;
