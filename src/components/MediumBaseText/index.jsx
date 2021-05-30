import styled from 'styled-components';
import PropTypes from 'prop-types';

function MediumBaseText({ className, children }) {
  return (
    <div className={className}>
      <ScMediumBaseText>{children}</ScMediumBaseText>
    </div>
  );
}

const ScMediumBaseText = styled.div`
  font-size: 1.125em;
  font-weight: 500;
  line-height: 100%;
`;

MediumBaseText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MediumBaseText;
