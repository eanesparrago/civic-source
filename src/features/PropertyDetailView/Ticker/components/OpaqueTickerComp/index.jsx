import styled from 'styled-components';
import PropTypes from 'prop-types';
import TickerMediumText from '../TickerMediumText';

function OpaqueTickerComp({ labelText, value }) {
  return (
    <ScOpaqueTickerComp>
      <ScLabelText>{labelText}</ScLabelText>

      {value}
    </ScOpaqueTickerComp>
  );
}

const ScOpaqueTickerComp = styled.div`
  background-color: ${(p) => p.theme.color.white};
  height: 100%;
  padding: 0.5em 1.5em 0.75em 1.5em;
`;

const ScLabelText = styled(TickerMediumText)`
  margin-bottom: 0.125em;
`;

OpaqueTickerComp.propTypes = {
  labelText: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
};

export default OpaqueTickerComp;
