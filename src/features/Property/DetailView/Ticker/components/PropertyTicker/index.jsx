import styled from 'styled-components';
import LightBaseText from 'components/LightBaseText';
import MediumBaseText from 'components/MediumBaseText';
import GreenTickerText from '../GreenTickerText';
import RedTickerText from '../RedTickerText';
import GreenArrow from './GreenArrow';
import GreyArrow from './GreyArrow';
import RedArrow from './RedArrow';

function PropertyTicker({
  addressText,
  priceUpdateText = '$',
  priceText,
  variant,
}) {
  const ArrowComponent =
    (variant === 'increase' && GreenArrow) ||
    (variant === 'retain' && GreyArrow) ||
    (variant === 'decrease' && RedArrow);

  const TickerTextComponent =
    (variant === 'increase' && GreenTickerText) ||
    (variant === 'retain' && MediumBaseText) ||
    (variant === 'decrease' && RedTickerText);

  return (
    <ScPropertyTicker>
      <ArrowComponent />

      <div>
        <ScAddressText>{addressText}</ScAddressText>

        <PriceInfoBlock>
          <TickerTextComponent>{priceUpdateText}</TickerTextComponent>

          <LightBaseText>{priceText}</LightBaseText>
        </PriceInfoBlock>
      </div>
    </ScPropertyTicker>
  );
}

const ScPropertyTicker = styled.div`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: flex-start;

  > *:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

const ScAddressText = styled(MediumBaseText)`
  margin-bottom: 0.25rem;
  white-space: nowrap;
`;

const PriceInfoBlock = styled.div`
  display: flex;
  white-space: nowrap;

  > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export default PropertyTicker;
