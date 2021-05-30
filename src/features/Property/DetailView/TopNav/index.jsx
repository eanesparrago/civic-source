import styled from 'styled-components';
import ListViewButton from './ListViewButton';
import MapPinButton from './MapPinButton';
import MarketValue from './MarketValue';
import PlaceDeposit from './PlaceDeposit';
import PropertyAddress from './PropertyAddress';
import SortButton from './SortButton';
import WishlistButton from './WishlistButton';

function TopNav() {
  return (
    <ScTopNav>
      <SmallBlock>
        <ListViewButton />
      </SmallBlock>

      <BigBlock>
        <PropertyAddress />
      </BigBlock>

      <SmallBlock>
        <MapPinButton />
      </SmallBlock>

      <BigBlock>
        <PlaceDeposit />
      </BigBlock>

      <SmallBlock>
        <WishlistButton />
      </SmallBlock>

      <BigBlock>
        <MarketValue />
      </BigBlock>

      <SmallBlock>
        <SortButton />
      </SmallBlock>
    </ScTopNav>
  );
}

const ScTopNav = styled.div`
  position: relative;
  padding: 3em 10.75em;
  display: flex;
  align-items: center;
  z-index: 1;
  background: rgba(255, 255, 255, 0.85);

  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    font-size: 0.9rem;
    padding-top: 2em;
    padding-bottom: 2em;
  }
`;

const BigBlock = styled.div`
  flex-grow: 2;
  width: 28.5em;
`;

const SmallBlock = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TopNav;
