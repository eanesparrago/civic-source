import styled from 'styled-components';
import PropTypes from 'prop-types';

function LightBaseText({ className, children }) {
  return (
    <ScLightBaseText className={className}>
      <span>{children}</span>
    </ScLightBaseText>
  );
}

const ScLightBaseText = styled.div`
  color: ${(p) => p.theme.color.textDarkMidPriority};

  span {
    font-size: 1.125em;
    font-weight: 200;
    line-height: 100%;
  }
`;

LightBaseText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LightBaseText;
