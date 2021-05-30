import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';
import PropTypes from 'prop-types';

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
  padding: 0.75em 1.5em;
`;

const ScLabelText = styled(MediumBaseText)`
  margin-bottom: 0.25em;
`;

OpaqueTickerComp.propTypes = {
  labelText: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
};

export default OpaqueTickerComp;
