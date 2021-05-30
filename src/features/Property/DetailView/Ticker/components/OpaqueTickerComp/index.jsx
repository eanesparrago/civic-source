import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';

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
`

export default OpaqueTickerComp;
