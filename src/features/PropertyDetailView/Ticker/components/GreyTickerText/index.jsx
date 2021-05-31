import styled from 'styled-components';
import TickerMediumText from '../TickerMediumText';

function GreyTickerText({ children, ...rest }) {
  return <ScGreyTickerText {...rest}>{children}</ScGreyTickerText>;
}

const ScGreyTickerText = styled(TickerMediumText)`
  color: ${(p) => p.theme.color.textDarkLowPriority};
  line-height: 100%;
`;

export default GreyTickerText;
