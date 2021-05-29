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
  height: 15rem;
  padding-left: 10.75rem;
  padding-right: 10.75rem;
  display: flex;
  align-items: center;
  background-color: ${(p) => p.theme.color.white};
  opacity: 0.85;
  z-index: 1;
`;

const BigBlock = styled.div`
  flex-grow: 2;
  width: 28.5rem;
`;

const SmallBlock = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TopNav;
