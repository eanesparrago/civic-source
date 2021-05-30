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
  margin: 1rem;
  position: relative;
  border: 0.25rem solid ${(p) => p.theme.color.blue};
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  text-align: center;
  color: ${(p) => p.theme.color.textDarkHighPriority};
  background: rgba(255, 255, 255, 0.86);
`;

const ScMarketValueText = styled.div`
  font-weight: 300;
  font-size: 1.3125rem;
  letter-spacing: 0.125rem;
  margin-bottom: 1.5rem;
`;

const AddressBlock = styled.div`
  margin-bottom: 1.5rem;

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const ScAddress1Text = styled.div`
  font-weight: 200;
  font-size: 1.375rem;
  letter-spacing: 0.125rem;
`;

const ScAddress2Text = styled.div`
  font-weight: 200;
  font-size: 0.9rem;
  letter-spacing: 0.125rem;
`;

const ScReserveBidText = styled.div`
  font-weight: 200;
  font-size: 0.9rem;
  letter-spacing: 0.125rem;
`;

export default SaleInfo;
