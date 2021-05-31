import styled from 'styled-components';
import TickerMediumText from '../TickerMediumText';

function RedTickerText({ children, ...rest }) {
  return <ScRedTickerText {...rest}>{children}</ScRedTickerText>;
}

const ScRedTickerText = styled(TickerMediumText)`
  color: ${(p) => p.theme.color.primaryRed};
  line-height: 100%;
`;

export default RedTickerText;
