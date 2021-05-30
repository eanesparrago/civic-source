import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';
import PropTypes from 'prop-types';

function RedTickerText({ className, children }) {
  return <ScRedTickerText className={className}>{children}</ScRedTickerText>;
}

const ScRedTickerText = styled(MediumBaseText)`
  color: ${(p) => p.theme.color.primaryRed};
  line-height: 100%;
`;

RedTickerText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default RedTickerText;
