import styled from 'styled-components';
import GreenTickerText from '../GreenTickerText';
import RedTickerText from '../RedTickerText';
import GreenArrow from './GreenArrow';
import GreyArrow from './GreyArrow';
import RedArrow from './RedArrow';
import PropTypes from 'prop-types';
import TickerMediumText from '../TickerMediumText';
import TickerLightText from '../TickerLightText';

function PropertyTicker({ addressText, priceUpdateText, priceText, variant }) {
  const ArrowComponent =
    (variant === 'increase' && GreenArrow) ||
    (variant === 'retain' && GreyArrow) ||
    (variant === 'decrease' && RedArrow);

  const TickerTextComponent =
    (variant === 'increase' && GreenTickerText) ||
    (variant === 'retain' && TickerMediumText) ||
    (variant === 'decrease' && RedTickerText);

  return (
    <ScPropertyTicker>
      <ArrowComponent />

      <div>
        <ScAddressText>{addressText}</ScAddressText>

        <PriceInfoBlock $priceUpdateText={priceUpdateText}>
          <TickerTextComponent>{priceUpdateText || '$'}</TickerTextComponent>

          <TickerLightText>{priceText}</TickerLightText>
        </PriceInfoBlock>
      </div>
    </ScPropertyTicker>
  );
}

const ScPropertyTicker = styled.div`
  height: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.75em;
  display: flex;
  align-items: flex-start;

  > *:not(:last-child) {
    margin-right: 0.25em;
  }
`;

const ScAddressText = styled(TickerMediumText)`
  margin-bottom: 0.125em;
  white-space: nowrap;
`;

const PriceInfoBlock = styled.div`
  display: flex;
  white-space: nowrap;

  > *:not(:last-child) {
    margin-right: ${(p) => (p.$priceUpdateText ? '1.625em' : '2.9375em')};
  }
`;

PropertyTicker.propTypes = {
  addressText: PropTypes.node.isRequired,
  priceUpdateText: PropTypes.node,
  priceText: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
};

export default PropertyTicker;
