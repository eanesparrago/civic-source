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
  height: 15em;
  padding-top: 4.5625em;
  padding-left: 15em;
  padding-right: 13.9375em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1;
  background: rgba(255, 255, 255, 0.85);
`;

const BigBlock = styled.div`
  flex-grow: 2;
  width: 28.5em;
`;

const SmallBlock = styled.div`
  /* flex-grow: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TopNav;
