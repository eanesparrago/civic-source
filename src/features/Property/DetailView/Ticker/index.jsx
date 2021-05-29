import styled from 'styled-components';
import OutbidQuantity from './OutbidQuantity';
import ActiveQuantity from './ActiveQuantity';
import WinningQuantity from './WinningQuantity';
import WinningPrice from './WinningPrice';
import ActivePrice from './ActivePrice';
import OutbidPrice from './OutbidPrice';
import PropertyTickerComp from 'components/PropertyTickerComp';

function Ticker() {
  return (
    <ScTicker>
      <OutbidQuantity />

      <ActiveQuantity />

      <WinningQuantity />

      <PropertyTickerComp />

      <WinningPrice />

      <ActivePrice />

      <OutbidPrice />

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

const ScTranslucentBackground = styled.div`
  background-color: ${(p) => p.theme.color.white};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export default Ticker;
