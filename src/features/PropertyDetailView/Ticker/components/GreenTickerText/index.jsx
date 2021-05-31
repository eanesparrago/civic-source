import styled from 'styled-components';
import TickerMediumText from '../TickerMediumText';

function GreenTickerText({ children, ...rest }) {
  return <ScGreenTickerText {...rest}>{children}</ScGreenTickerText>;
}

const ScGreenTickerText = styled(TickerMediumText)`
  color: ${(p) => p.theme.color.primaryGreen};
  line-height: 100%;
`;

export default GreenTickerText;
