import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';

function RedTickerText({ className, children }) {
  return <ScRedTickerText className={className}>{children}</ScRedTickerText>;
}

const ScRedTickerText = styled(MediumBaseText)`
  color: ${(p) => p.theme.color.primaryRed};
`;

export default RedTickerText;
