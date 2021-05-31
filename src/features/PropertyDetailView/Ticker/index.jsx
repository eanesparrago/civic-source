import styled from 'styled-components';
import PropertyTicker from './components/PropertyTicker';
import OutbidQuantity from './OutbidQuantity';
import ActiveQuantity from './ActiveQuantity';
import WinningQuantity from './WinningQuantity';
import WinningPrice from './WinningPrice';
import ActivePrice from './ActivePrice';
import OutbidPrice from './OutbidPrice';

function Ticker() {
  return (
    <ScTicker>
      <QuantityTickersBlock>
        <OutbidQuantity />

        <ActiveQuantity />

        <WinningQuantity />
      </QuantityTickersBlock>

      <PropertyTickersBlock>
        <PropertyTicker
          addressText="14 Flood St."
          priceUpdateText="-$100"
          priceText="$5,000 "
          variant="increase"
        />

        <PropertyTicker
          addressText="24 Washington Ave."
          priceUpdateText="-$100"
          priceText="$5,200"
          variant="decrease"
        />

        <PropertyTicker
          addressText="289 Hempstead St."
          priceText="$5,000 "
          variant="retain"
        />

        <PropertyTicker
          addressText="57 West Ave G."
          priceText="$5,200"
          variant="increase"
        />
      </PropertyTickersBlock>

      <PriceTickersBlock>
        <WinningPrice />

        <ActivePrice />

        <OutbidPrice />
      </PriceTickersBlock>
    </ScTicker>
  );
}

const ScTicker = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);

  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    font-size: 0.9rem;
  }
`;

const PropertyTickersBlock = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding-left: 4.5625em;
  padding-right: 7.1875em;
`;

const QuantityTickersBlock = styled.div`
  display: flex;
  width: 25.125em;

  > *:not(:last-child) {
    flex-grow: 1;
  }
`;

const PriceTickersBlock = styled.div`
  display: flex;
  width: 25.125em;

  > * {
    flex-grow: 1;
  }
`;

export default Ticker;
