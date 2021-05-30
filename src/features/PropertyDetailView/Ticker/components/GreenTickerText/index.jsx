import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';
import PropTypes from 'prop-types';

function GreenTickerText({ className, children }) {
  return (
    <ScGreenTickerText className={className}>{children}</ScGreenTickerText>
  );
}

const ScGreenTickerText = styled(MediumBaseText)`
  color: ${(p) => p.theme.color.primaryGreen};
  line-height: 100%;
`;

GreenTickerText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GreenTickerText;
