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

      <ScTranslucentBackground />
    </ScTicker>
  );
}

const ScTicker = styled.div`
  position: relative;
  height: 3.75rem;
  display: flex;
  z-index: 1;
`;

const PropertyTickersBlock = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
`;

const QuantityTickersBlock = styled.div`
  display: flex;
`;

const PriceTickersBlock = styled.div`
  display: flex;
`;

const ScTranslucentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: ${(p) => p.theme.color.white};
  opacity: 0.5;
`;

export default Ticker;
