import styled from 'styled-components';

function SaleInfo() {
  return (
    <ScSaleInfo>
      <ScMarketValueText>Market Value $40,000</ScMarketValueText>

      <AddressBlock>
        <ScAddress1Text>14 Flood St.</ScAddress1Text>

        <ScAddress2Text>New Orleans, LA 70122</ScAddress2Text>
      </AddressBlock>

      <ScReserveBidText>Reserve Bid $5,000</ScReserveBidText>
    </ScSaleInfo>
  );
}

const ScSaleInfo = styled.div`
  margin: 0.75em 0 0.75em 0.75em;
  position: relative;
  border: 0.25rem solid ${(p) => p.theme.color.blue};
  border-radius: 1.09375em;
  padding: 1.5em 2em 0.875em 2em;
  text-align: center;
  color: ${(p) => p.theme.color.textDarkHighPriority};
  background: rgba(255, 255, 255, 0.86);
`;

const ScMarketValueText = styled.div`
  margin-bottom: 1.5em;
  font-weight: 300;
  font-size: 1.3125em;
  letter-spacing: 0.1095em;
`;

const AddressBlock = styled.div`
  margin-bottom: 1.5em;

  > *:not(:last-child) {
    margin-bottom: 0.25em;
  }
`;

const ScAddress1Text = styled.div`
  font-weight: 200;
  font-size: 1.375em;
  letter-spacing: 0.08em;
  line-height: 100%;
`;

const ScAddress2Text = styled.div`
  font-weight: 200;
  font-size: 0.9375em;
  letter-spacing: 0.13em;
  line-height: 100%;
`;

const ScReserveBidText = styled.div`
  font-weight: 200;
  font-size: 0.9em;
  letter-spacing: 0.11em;
`;

export default SaleInfo;
