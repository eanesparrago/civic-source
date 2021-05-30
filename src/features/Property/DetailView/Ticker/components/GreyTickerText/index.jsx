import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';
import PropTypes from 'prop-types';

function GreyTickerText({ className, children }) {
  return <ScGreyTickerText className={className}>{children}</ScGreyTickerText>;
}

const ScGreyTickerText = styled(MediumBaseText)`
  color: ${(p) => p.theme.color.textDarkLowPriority};
  line-height: 100%;
`;

GreyTickerText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GreyTickerText;
