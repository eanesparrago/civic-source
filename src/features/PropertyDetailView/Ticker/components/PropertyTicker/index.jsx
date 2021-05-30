import styled from 'styled-components';
import LightBaseText from 'components/LightBaseText';
import MediumBaseText from 'components/MediumBaseText';
import GreenTickerText from '../GreenTickerText';
import RedTickerText from '../RedTickerText';
import GreenArrow from './GreenArrow';
import GreyArrow from './GreyArrow';
import RedArrow from './RedArrow';
import PropTypes from 'prop-types';

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
  padding: 0.75em 1.5em;
  display: flex;
  align-items: flex-start;

  > *:not(:last-child) {
    margin-right: 0.25em;
  }
`;

const ScAddressText = styled(MediumBaseText)`
  margin-bottom: 0.25em;
  white-space: nowrap;
`;

const PriceInfoBlock = styled.div`
  display: flex;
  white-space: nowrap;

  > *:not(:last-child) {
    margin-right: 1.5em;
  }
`;

PropertyTicker.propTypes = {
  addressText: PropTypes.node.isRequired,
  priceUpdateText: PropTypes.node,
  priceText: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
};

export default PropertyTicker;
