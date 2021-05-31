import styled from 'styled-components';
import PropTypes from 'prop-types';

function DisplayText1({ className, children }) {
  return (
    <ScDisplayText1 className={className}>
      <span>{children}</span>
    </ScDisplayText1>
  );
}

const ScDisplayText1 = styled.div`
  color: ${(p) => p.theme.color.textDarkHighPriority};

  span {
    font-size: 2.875em;
    font-weight: 300;
    line-height: 100%;
    letter-spacing: 0.043em;
  }
`;

DisplayText1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DisplayText1;
